export interface IClient {
    id: string
    name: string
    email: string
    phone: number
}

export interface IClientCreate {
    name: string
    email: string
    phone: number
    password: string
}

export interface IClientLogin{
    email: string
    password: string
}

export interface IClientListOne{
    authorization?: string
}