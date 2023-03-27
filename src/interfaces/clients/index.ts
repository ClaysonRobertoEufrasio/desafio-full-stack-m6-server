export interface IClient {
    id: string
    name: string
    email: string
    phone: string
}

export interface IClientCreate {
    name: string
    email: string
    phone: string
    password: string
}

export interface IClientLogin{
    email: string
    password: string
}
