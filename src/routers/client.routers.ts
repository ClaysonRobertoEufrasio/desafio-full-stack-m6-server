import { Router } from "express";

import clientListController from "../controllers/clients/clientList.controller";
import clientCreateController from "../controllers/clients/clientCreate.controller";
import clientLoginController from "../controllers/clients/clientLogin.controller";
import clientListOneController from "../controllers/clients/clientListOne.controller";

const routes = Router()

routes.post("/clients", clientCreateController)
routes.post("/clients/login", clientLoginController)

routes.get("/clients", clientListController)
routes.get("/clients/me", clientListOneController)


export default routes