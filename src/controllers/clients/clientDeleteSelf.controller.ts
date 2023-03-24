import { Request, Response } from 'express'
import { AppError, handleError } from '../../errors/appError'
import clientDeleteSelfService from '../../services/clients/clientDeleteSelf.service'

const clientDeleteSelfController = async (req: Request, res: Response) => {

    try {

        const email = req.clientEmail

        const client =  await clientDeleteSelfService(email)
        
        return res.status(200).json({message: "Client deleted with sucess!"})

    } catch (err) {

        if (err instanceof AppError) {

            handleError(err, res)
        }
    }
}

export default clientDeleteSelfController