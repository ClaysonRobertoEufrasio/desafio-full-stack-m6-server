import { Request, Response } from 'express'
import { AppError, handleError } from '../../errors/appError'
import contactDeleteService from '../../services/contacts/contactDelete.service'

const contactDeleteController = async (req: Request, res: Response) => {

    try {

        const id = req.params.id

        const contact =  await contactDeleteService(id)
        
        return res.status(200).json({message: "Contact deleted with sucess!"})

    } catch (err) {

        if (err instanceof AppError) {

            handleError(err, res)
        }
    }
}

export default contactDeleteController