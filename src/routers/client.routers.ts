import { Router } from "express";

import clientListController from "../controllers/clients/clientList.controller";
import clientCreateController from "../controllers/clients/clientCreate.controller";
import clientLoginController from "../controllers/clients/clientLogin.controller";
import clientListOneController from "../controllers/clients/clientListOne.controller";
import clientDeleteSelfController from "../controllers/clients/clientDeleteSelf.controller";
import clientUpdateController from "../controllers/clients/clientUpdate.controller";

import { authClient } from "../middlewares/authClient.middleware";

const clientRoutes = Router()

clientRoutes.post("/clients", clientCreateController)
clientRoutes.post("/login", clientLoginController)

clientRoutes.get("/clients", authClient, clientListController)
clientRoutes.get("/clients/me", authClient, clientListOneController)

clientRoutes.delete("/clients/me", authClient, clientDeleteSelfController)

clientRoutes.patch("/clients/me/updateClient", authClient, clientUpdateController)

export default clientRoutes