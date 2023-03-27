import { Request, Response } from 'express'

import { AppError, handleError } from '../../errors/appError'
import contactUpdateService from '../../services/contacts/contactUpdate.service'

    const contactUpdateController = async (req: Request, res: Response) => {
    
        try {
          
            const id = req.params.id
    
            const contactData = req.body
    
            const contact =  await contactUpdateService(id, contactData)
            
            return res.status(201).json({
                message: "Contact updated!",
                contact
            })
    
        } catch (err) {
    
            if (err instanceof AppError) {

                handleError(err, res)
            }
        }
    }
    
    export default contactUpdateController