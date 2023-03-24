import { Request, Response } from 'express'
import { AppError, handleError } from '../../errors/appError'

import clientCreateService from '../../services/clients/clientCreate.service'

const clientCreateController = async (req: Request, res: Response) => {

    try {

        const { name, email, phone, password } = req.body
        
        const newClient = await clientCreateService({ name, email, phone, password })
        
        return res.status(201).send(newClient)

    } catch (err) {

        if (err instanceof AppError) {

            handleError(err, res)
        }
    }
}

export default clientCreateController