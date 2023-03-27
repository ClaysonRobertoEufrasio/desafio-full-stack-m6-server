import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { IContactCreate } from "../../interfaces/contacts";
import { Contacts } from "../../entities/contacts.entity";

const contactCreateService = async ({ name, email, phone}: IContactCreate, resEmailClient: string) => {
    
    const clientRepository = AppDataSource.getRepository(Client)
    
    const contactRepository = AppDataSource.getRepository(Contacts)
    
    const clients = await clientRepository.find()
    
    const clientData = clients.find(client => client.email === resEmailClient)
    
    const newContact = contactRepository.create({
        name,
        email,
        phone,
        client: clientData
    })

    await contactRepository.save(newContact)

    const returnContact = await contactRepository.findOne({
        where: {
            id: newContact.id
        }
    })

    return returnContact

}

export default contactCreateService