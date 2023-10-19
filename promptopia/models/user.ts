import {
    Document,
    Model,
    Schema,
    model } from 'mongoose';

interface IUser extends Document {
    email: string;
    username: string;
    image: string;
}

const UserSchema: Schema = new Schema<IUser>({
    email: {
        type: String,
        required: [true, 'Email is required!'],
        unique: true
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [
            /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, 
            "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"
        ]
    },
    image: {
        type: String,
    }
});

const User: Model<IUser> = model<IUser>('User', UserSchema);

export default User;