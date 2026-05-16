const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const saasUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['customer', 'admin'], default: 'customer' },
  plan: { type: String, default: 'Free' },
  status: { type: String, enum: ['Active', 'Inactive', 'Suspended'], default: 'Active' },
}, { timestamps: true });

// Hash password before saving
saasUserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

saasUserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('SaaSUser', saasUserSchema);
