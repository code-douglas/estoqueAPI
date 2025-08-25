import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    type: {
      type: String,
      enum: ['entrada', 'saida'],
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, 'Quantity must be at least 1'],
    },
    cost: {
      type: Number,
      required: true,
      min: [0, 'Cost cannot be negative'],
    },
    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model('Transaction', TransactionSchema);

export default Transaction;
