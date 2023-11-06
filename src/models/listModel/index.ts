import { Schema, model, Document } from "mongoose";

export interface List extends Document {
  name: string;
  // Define other list fields
}

const listSchema = new Schema<List>({
  name: String,
  // Define other list fields here
});

export default model<List>("List", listSchema);
