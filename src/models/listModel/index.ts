import { Schema, model, Document } from "mongoose";
import { IList } from "../../types";

const listSchema = new Schema<IList>({
  name: String,
  category: String,
  isPurchased: Boolean
});

export default model<IList>("List", listSchema);