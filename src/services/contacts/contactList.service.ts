import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entity"
import { Contacts } from "../../entities/contacts.entity"

const contactListService = () => {

    const contactRepository = AppDataSource.getRepository(Contacts)

    const contacts = contactRepository.find()

    return contacts
}

export default contactListService