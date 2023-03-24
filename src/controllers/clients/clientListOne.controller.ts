import { Request, Response } from 'express'
import clientListOneService from '../../services/clients/clientListOne.service'

const clientListOneController = async (req: Request, res: Response) => {

    try {

        const user =  await clientListOneService({authorization:req.headers.authorization})
                  
        return res.status(200).send(user)

    } catch (err) {

        if (err instanceof Error) {

            return res.status(401).send({
                "error": err.name,
                "message": err.message
            })
        }
    }
}

export default clientListOneController