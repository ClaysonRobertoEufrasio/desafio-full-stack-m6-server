import { Request, Response } from 'express'
import clientUpdatePasswordService from '../../services/clients/clientUpdatePassword.service'

    const clientUpdatePasswordController = async (req: Request, res: Response) => {
    
        try {
          
            const email = req.clientEmail
    
            const clientData = req.body
    
            const client =  await clientUpdatePasswordService(email, clientData)
            
            return res.status(201).json({message: "Client updated!"})
    
        } catch (err) {
    
            if (err instanceof Error) {
    
                return res.status(400).send({
                    "error": err.name,
                    "message": err.message
                })
            }
        }
    }
    
    export default clientUpdatePasswordController