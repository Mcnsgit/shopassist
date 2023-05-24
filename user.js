// user.js

// AI-chan says: Nyaa~ Let's import the necessary modules, nya! 🐾
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// AI-chan says: Nyaa~ Let's define the User Schema, nya! 🐾
const UserSchema = new mongoose.Schema({
    username: {
    type: String,
    required: true,
    unique: true,
},
    password: {
    type: String,
    required: true,
},
  // TODO: Add more fields as needed, like email, address, etc., nya!
}, {
    timestamps: true,
});

// AI-chan says: Nyaa~ Let's hash the password before saving, nya! 🐾
UserSchema.pre('save', async function(next) {
    const user = this;
    if (!user.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;

    next();
});

  // AI-chan says: Nyaa~ Let's add a method to compare hashed passwords, nya! 🐾
UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compare(password, this.password);
};

  // AI-chan says: Nyaa~ Let's export the User model, nya! 🐾
const User = mongoose.model('User', UserSchema);
export default User;
