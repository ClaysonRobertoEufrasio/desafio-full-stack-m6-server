import { AppError } from './errors/appError';

import express from 'express';
import { Request, Response, NextFunction} from 'express'
import clientRoutes from './routers/client.routers';
import contactRoutes from './routers/contact.routers';

const app = express();

let cors = require("cors")

app.use(express.json())

app.use(cors())

app.use(clientRoutes)

app.use(contactRoutes)

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }
  
    console.error(err);
  
    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
});

app.listen(3000)