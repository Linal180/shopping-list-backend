import * as mongoose from 'mongoose';

interface List {
  name: string;
  items: string[];
  // Add other properties as needed
}

interface ListDocument extends mongoose.Document, List {}

const listSchema = new mongoose.Schema<List>({
  name: {
    type: String,
    required: true,
  },
  items: [String],
  // Add other schema properties as needed
});

export const ListModel = mongoose.model<ListDocument>('List', listSchema);
