import { Request, Response } from "express";
import List from "../../models/listModel";
import SharedList from "../../models/sharedListModel";
import ListService from "../../services/listService";

const listService = new ListService(List, SharedList);
export default class ListController {
  async createList(req: Request, res: Response) {
    try {
      const createdList = await listService.createList(req.body);
      if (createdList) {
        res.status(201).json({
          data: createdList,
          message: "List created!",
        });
      }
    } catch (e) {
      console.log("ERROR: ", e);
      res.status(500).json({
        data: null,
        message: "Internal server error",
      });
    }
  }

  async shareList(req: Request, res: Response) {
    try {
      const sharedList = await listService.shareList(req.body);
      if (sharedList) {
        res.status(201).json({
          data: sharedList,
          message: "List shared!",
        });
      }
    } catch (e) {
      console.log("ERROR: ", e);
      res.status(500).json({
        data: null,
        message: "Internal server error",
      });
    }
  }

  async getSharedLists(req: any, res: Response) {
    try {
      const sharedLists = await listService.getSharedLists(req.user?.id);
      if (sharedLists) {
        res.status(200).json({
          data: sharedLists,
          message: "Fetched shared lists!",
        });
      }
    } catch (e) {
      console.log("ERROR: ", e);
      res.status(500).json({
        data: null,
        message: "Internal server error",
      });
    }
  }
}
