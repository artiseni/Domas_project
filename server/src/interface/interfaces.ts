
export interface UserData {
    uuid?: string
    username?: string
    email?: string
    password?: string
    createdAt?: Date
    updatedAt?: Date
}

export interface Result {
    id: string
    username: string
    email: string
    createdAt: Date
}

export interface DataResident {
    uuid?: string
    createdAt?: Date
    updatedAt?: Date
    familyId?: string
    nik?: string
    name?: string
    place_dateOfBirth?: string
    gender?: string
    bloodType?: string
    address?: string
    rt?: string
    rw?: string
    districts?: string
    village?: string
    religion?: string
    maritalStatus?: string
    profession?: string
    citizenship?: string
    validUntil?: string
}

