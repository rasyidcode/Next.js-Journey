import {
    Document,
    Model,
    Schema,
    Types,
    model } from 'mongoose'

interface IPrompt extends Document {
    _id: Types.ObjectId,
    creator: Types.ObjectId,
    prompt: string,
    tag: string
}

const PromptSchema: Schema = new Schema<IPrompt>({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is required.']
    },
    tag: {
        type: String,
        required: [true, 'Tag is required.']
    }
});

const Prompt: Model<IPrompt> = model<IPrompt>('Prompt', PromptSchema);

export default Prompt;

export type { IPrompt };
