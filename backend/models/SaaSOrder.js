const mongoose = require('mongoose');

const saasOrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'SaaSUser' },
  orderId: { type: String, required: true, unique: true },
  product: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'], 
    default: 'Pending' 
  },
  paymentStatus: { type: String, enum: ['Paid', 'Unpaid', 'Refunded'], default: 'Unpaid' },
}, { timestamps: true });

module.exports = mongoose.model('SaaSOrder', saasOrderSchema);
