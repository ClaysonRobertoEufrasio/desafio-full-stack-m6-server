import { AppDataSource } from "../../data-source";
import { IClientCreate } from "../../interfaces/clients";
import { Client } from "../../entities/client.entity";

import bcrypt from "bcrypt";

const clientCreateService = async ({ name, email, phone, password }: IClientCreate) => {
    
    const clientRepository = AppDataSource.getRepository(Client)

    const clients = await clientRepository.find()

    const emailAlreadyExists = clients.find(client => client.email === email)

    if (emailAlreadyExists) {

        throw new Error("Email already exists")
    }

    const client = new Client()
    client.name = name
    client.email = email
    client.phone = phone
    client.password = bcrypt.hashSync(password,10)
	
    clientRepository.create(client)
    await clientRepository.save(client)

    return client

}

export default clientCreateService