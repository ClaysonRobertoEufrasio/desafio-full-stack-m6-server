import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entity"
import bcrypt from "bcrypt"
import { IClientCreate } from "../../interfaces/clients"
import { AppError } from "../../errors/appError"
    
const clientUpdateService = async (email: string, clientData: IClientCreate) => {
    
    const clientRepository = AppDataSource.getRepository(Client) 
    
    const clients = await clientRepository.find()
    
    const account = clients.find(client => client.email === email)
    
    if (bcrypt.compareSync(clientData.password, account!.password)) {
        throw new AppError(409,"Inform a different password.")
    }
    
    const newPassword = bcrypt.hashSync(clientData.password, 10)
    
    await clientRepository.update(account!.id, { 
        name: clientData.name ? clientData.name : account?.name,
        email: clientData.email ? clientData.email : account?.email,
        password: newPassword ? newPassword : account?.password,
        phone: clientData.phone ? clientData.phone : account?.phone
    })
    
    const clientUpdate = await clientRepository.findOneBy({email})
        
    return clientUpdate
}
    
export default clientUpdateService