import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const users = mongoose.model('users', usersSchema);

export default users;
