import { Router } from "express";

import { authClient } from "../middlewares/authClient.middleware";
import contactCreateController from "../controllers/contacts/contactCreate.controller";
import contactListController from "../controllers/contacts/contactList.controller";
import contactUpdateController from "../controllers/contacts/contactUpdate.controller";
import contactDeleteController from "../controllers/contacts/contactDelete.controller";

const contactRoutes = Router()

contactRoutes.post("/contacts", authClient, contactCreateController)

contactRoutes.get("/contacts", authClient, contactListController)

contactRoutes.delete("/contacts/:id", authClient, contactDeleteController)

contactRoutes.patch("/contacts/:id/updateContacts", authClient, contactUpdateController)

export default contactRoutes