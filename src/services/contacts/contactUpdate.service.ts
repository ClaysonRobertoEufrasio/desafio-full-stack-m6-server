import { AppDataSource } from "../../data-source"
import { IContactCreate } from "../../interfaces/contacts"
import { Contacts } from "../../entities/contacts.entity"
    
const contactUpdateService = async (id: string, contactData: IContactCreate) => {
    
    const contactRepository = AppDataSource.getRepository(Contacts) 
    
    const contacts = await contactRepository.find()
    
    const contact = contacts.find(conta => conta.id === id)

    await contactRepository.update(contact!.id, {
        name: contactData.name ? contactData.name : contact?.name,
        email: contactData.email ? contactData.email : contact?.email,
        phone: contactData.phone ? contactData.phone : contact?.phone,
    })

    const contactUpdate = await contactRepository.findOneBy({ id })
    
    return contactUpdate
}
    
export default contactUpdateService