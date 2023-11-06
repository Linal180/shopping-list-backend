import List from "../../models/listModel";
import SharedList from "../../models/sharedListModel";
import { IList, ISharedList } from "../../types";

export default class ListService {
  constructor(
    private readonly ListModel: typeof List,
    private readonly sharedListModel: typeof SharedList
  ) {}

  async createList(list: IList) {
    try {
      const newList = new this.ListModel(list);
      return await newList.save();
    } catch (error: any) {
      console.log("ERROR: ", error.message);
    }
  }

  async shareList(sharedList: ISharedList) {
    try {
      const newSharedList = new this.sharedListModel(sharedList);
      return await newSharedList.save();
    } catch (error: any) {
      console.log("ERROR: ", error.message);
    }
  }

  async getSharedLists(userId: string) {
    try {
      return await this.sharedListModel.find({ userId })
    } catch (error: any) {
      console.log("ERROR: ", error.message);
    }
  }
}
