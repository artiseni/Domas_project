import 'reflect-metadata'
import { UserData, DataResident } from '../interface/interfaces'
import { Users } from '../entity/Users'
import { Resident } from '../entity/Resident'
import { getConnection } from 'typeorm'
import { Forbidden, NotFound } from '@tsed/exceptions'
import { hash, compare } from 'bcryptjs'
import { connection } from '../config/ormconfig'
import { returnData, returnResident } from '../functions/functions'



const userParamsMetadataKey = Symbol("userparams")
const repository = getConnection('default').manager

// parmas decor
export const UserParams = (Params: any) => {
    return (target: Object, propertyKey: string | symbol, parameter: any) => {
        Reflect.defineMetadata(userParamsMetadataKey, Params, target, propertyKey)
    }

}


// method decor
export const FilterResult = () => {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const { value } = descriptor
        descriptor.value = async (...args: any[]) => {
            const user: UserData = await value.apply(this, args)
            return returnData(user)
        }
    }
}

export const ClientRequest = () => {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const { value } = descriptor
        descriptor.value = async (...args: any[]) => {
            const data: UserData | DataResident = await value.apply(this, args)
            const { username, email, password } = data as UserData
            const {
                familyId, nik, name,
                place_dateOfBirth, gender,
                bloodType, rt, rw,
                profession, maritalStatus
            } = data as DataResident

            return connection.then(async () => {
                switch (propertyKey) {

                    //Users
                    case 'getUser':
                        const isExist = await repository.findOne(Users, { email })
                        if (!isExist) throw new NotFound(`Email not found!`)
                        const isValid: boolean = await compare(password!, isExist.password)
                        if (!isValid) throw new Forbidden('Wrong password!')
                        return returnData(isExist)

                    case 'create':
                        try {
                            const user: Users = new Users()
                            const hased: string = await hash(password!, 10)
                            user.username = username!
                            user.email = email!
                            user.password = hased
                            const data: Users = await repository.save(user)
                            return returnData(data)
                        } catch {
                            throw new Forbidden('Email already exist...')
                        }

                    // Resident
                    case 'createResident':
                        try {
                            const resident = new Resident()
                            resident.familyId = familyId!
                            resident.nik = nik!
                            resident.name = name!
                            resident.place_dateOfBirth = place_dateOfBirth!
                            resident.gender = gender!
                            resident.bloodType = bloodType!
                            resident.rt = rt!
                            resident.rw = rw!
                            resident.maritalStatus = maritalStatus!
                            resident.profession = profession!
                            const result: Resident = await repository.save(resident)
                            return returnResident(result)
                        } catch {
                            throw new Forbidden('NIK already exist...')
                        }

                    default:
                        break;
                }

            }).catch(error => {
                throw ({ message: error.message, status: error.status })
            })

        }
    }
}




