import { Request, Response } from 'express'

import { AppError, handleError } from '../../errors/appError'
import clientUpdateService from '../../services/clients/clientUpdate.service'

    const clientUpdateController = async (req: Request, res: Response) => {
    
        try {
          
            const email = req.clientEmail
    
            const clientData = req.body
    
            const client =  await clientUpdateService(email, clientData)
            
            return res.status(201).json({message: "Client updated!"})
    
        } catch (err) {
    
            if (err instanceof AppError) {

                handleError(err, res)
            }
        }
    }
    
    export default clientUpdateController