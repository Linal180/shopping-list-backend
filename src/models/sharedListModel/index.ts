import mongoose, { Schema } from "mongoose";

interface SharedList {
  listId: mongoose.Types.ObjectId;
  sharedWith: string;
  permission: 'read' | 'write';
}

interface SharedListDocument extends Document, SharedList {}

const sharedListSchema = new Schema<SharedList>({
  listId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'List', // Reference to the ListModel
  },

  sharedWith: {
    type: String,
    required: true,
  },
  
  permission: {
    type: String,
    enum: ['read', 'write'],
    required: true,
  },
});

export const SharedListModel = mongoose.model<SharedListDocument>('SharedList', sharedListSchema);
