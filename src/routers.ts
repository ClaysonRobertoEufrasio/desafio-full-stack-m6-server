import { Router } from "express";

import clientListController from "./controllers/clients/clientList.controller";
import clientCreateController from "./controllers/clients/clientCreate.controller";

const routes = Router()

routes.post("/clients", clientCreateController)
routes.get("/clients", clientListController)

export default routes