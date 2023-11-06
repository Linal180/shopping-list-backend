import { Schema, model, Document } from "mongoose";

export interface SharedList extends Document {
  listId: string;
  sharedWith: string;
  permission: "read" | "write";
}

const sharedListSchema = new Schema<SharedList>({
  listId: String,
  sharedWith: String,
  permission: { type: String, enum: ["read", "write"] },
});

export default model<SharedList>("SharedList", sharedListSchema);
