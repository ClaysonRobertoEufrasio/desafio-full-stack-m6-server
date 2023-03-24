import { Router } from "express";

import clientListController from "../controllers/clients/clientList.controller";
import clientCreateController from "../controllers/clients/clientCreate.controller";
import clientLoginController from "../controllers/clients/clientLogin.controller";
import clientListOneController from "../controllers/clients/clientListOne.controller";
import clientDeleteSelfController from "../controllers/clients/clientDeleteSelf.controller";
import clientUpdateController from "../controllers/clients/clientUpdatePassword.controller";

import { authClient } from "../middlewares/authClient.middleware";

const routes = Router()

routes.post("/clients", clientCreateController)
routes.post("/clients/login", clientLoginController)

routes.get("/clients", authClient ,clientListController)
routes.get("/clients/me", authClient, clientListOneController)

routes.delete("/clients/me", authClient, clientDeleteSelfController)

routes.patch("/clients/me/updatePassword", authClient, clientUpdateController)

export default routes