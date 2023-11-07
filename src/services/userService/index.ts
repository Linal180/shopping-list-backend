import { IUser } from "../../types";
import User from "../../models/userModel"

export default class UserService {
  constructor(private readonly userModel: typeof User) {}

  async findUserByEmail(email: string): Promise<IUser | null> {
    return await this.userModel.findOne({ email });
  }
}