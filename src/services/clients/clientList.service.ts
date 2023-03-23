import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entity"

const clientListService = async () => {

    const clientRepository = await AppDataSource.getRepository(Client)

    const clients = clientRepository.find()

    return clients
}

export default clientListService