import User from "../../models/userModel";
import { IUser } from "../../types";

export default class UserService {
  constructor(private readonly userModel: typeof User) {}

  async findUserByEmail(email: string): Promise<IUser | null> {
    return await this.userModel.findOne({ email });
  }

}