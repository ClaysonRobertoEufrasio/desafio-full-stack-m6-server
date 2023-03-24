import { Request, Response } from 'express'
import clientDeleteSelfService from '../../services/clients/clientDeleteSelf.service'

const clientDeleteSelfController = async (req: Request, res: Response) => {

    try {

        const email = req.clientEmail

        const client =  await clientDeleteSelfService(email)
        
        return res.status(200).json({message: "Client deleted with sucess!"})

    } catch (err) {

        if (err instanceof Error) {

            return res.status(401).send({
                "error": err.name,
                "message": err.message
            })
        }
    }
}

export default clientDeleteSelfController