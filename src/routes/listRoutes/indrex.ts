import { Router } from "express";
import ListController from "../../controllers/listController";
import authorize from "../../middlewares/authMiddleware";

const listRoutes = Router();

const listController = new ListController();

listRoutes.post("/create", authorize, listController.createList);
listRoutes.post("/share", authorize, listController.shareList);
listRoutes.get("/sharedLists", authorize, listController.getSharedLists);

export default listRoutes;