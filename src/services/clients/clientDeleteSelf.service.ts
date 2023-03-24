import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entity"

const clientDeleteSelfService = async (email: string) => {

    const clientRepository = AppDataSource.getRepository(Client) 

    const client = await clientRepository.find()

    const account = client.find(client => client.email === email)

    await clientRepository.delete(account!.id)

    return true
}

export default clientDeleteSelfService