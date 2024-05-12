// models/adminuser.js
import bcrypt from "bcryptjs";
import mongoose from 'mongoose';

const AdminuserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
});

AdminuserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });
  
  AdminuserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };
  
const AdminUser = mongoose.model('AdminUser', AdminuserSchema);

export default AdminUser; 