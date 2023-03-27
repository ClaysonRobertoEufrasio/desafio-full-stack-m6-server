import { AppDataSource } from "../../data-source"
import { Contacts } from "../../entities/contacts.entity"

const contactDeleteService = async (id: string) => {

    const contactRepository = AppDataSource.getRepository(Contacts) 

    const contacts = await contactRepository.find()

    const contact = contacts.find(contact => contact.id === id)

    await contactRepository.delete(contact!.id)

    return true
}

export default contactDeleteService