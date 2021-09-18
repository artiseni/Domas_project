import { UserData, Result, DataResident } from '../interface/interfaces'

export const returnData = (data: UserData): Result => {
    return {
        id: data.uuid!,
        username: data.username!,
        email: data.email!,
        createdAt: data.createdAt!
    }
}

export const returnResident = (data: DataResident): DataResident => {
    return {
        uuid: data.uuid,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        familyId: data.familyId,
        nik: data.nik,
        name: data.name,
        place_dateOfBirth: data.place_dateOfBirth,
        gender: data.gender,
        bloodType: data.bloodType,
        address: data.address,
        rt: data.rt,
        rw: data.rw,
        districts: data.districts,
        village: data.village,
        religion: data.religion,
        maritalStatus: data.maritalStatus,
        profession: data.profession,
        citizenship: data.citizenship,
        validUntil: data.validUntil
    }
}
