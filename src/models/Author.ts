import mongoose, { Document, Schema } from 'mongoose';

// export interface IAuthor {
//     name: string;
// }

// export interface IAuthorModel extends IAuthor, Document {}

const AuthorSchema: Schema = new Schema(
    {
        _id: { type: String, required: true },
        name: { type: String, required: true }
    },
    {
        versionKey: false
    }
);

export default mongoose.model('Author', AuthorSchema);
