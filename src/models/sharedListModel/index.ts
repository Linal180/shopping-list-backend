import { Schema, model } from "mongoose";
import { ISharedList } from "../../types";

const sharedListSchema = new Schema<ISharedList>({
  userId: String,
  listId: String,
  sharedWith: String,
  permission: { type: String, enum: ["read", "write"] },
});

export default model<ISharedList>("SharedList", sharedListSchema);