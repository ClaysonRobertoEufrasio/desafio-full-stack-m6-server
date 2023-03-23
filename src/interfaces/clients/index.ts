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
}