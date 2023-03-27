import { Request, Response } from 'express'
import { AppError, handleError } from '../../errors/appError'
import contactCreateService from '../../services/contacts/contactCreate.service'

const contactCreateController = async (req: Request, res: Response) => {

    try {

        const resEmailClient = req.clientEmail

        const { name, email, phone} = req.body

        const newContact = await contactCreateService({ name, email, phone },resEmailClient )
        
        return res.status(201).send(newContact)
        

    } catch (err) {

        if (err instanceof AppError) {

            handleError(err, res)
        }
    }
}

export default contactCreateController