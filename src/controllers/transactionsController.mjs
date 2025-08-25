import Transaction from '../models/Transaction.mjs';
import Product from '../models/Product.mjs';

export const registerTransaction = async (req, res) => {
  try {
    const { product, type, quantity, notes, cost } = req.body;

    const foundProduct = await Product.findById(product);

    if (!foundProduct) {
      return res.status(404).json({ message: 'Product not found.' });
    }

    let newQuantity;
    let transactionCost;

    if (type === 'entrada') {
      newQuantity = foundProduct.quantity + quantity;
      transactionCost = cost;
      if (!transactionCost) {
        return res.status(400).json({ message: 'Cost is required for inbound transactions.' });
      }
    } else if (type === 'saida') {
      if (foundProduct.quantity < quantity) {
        return res.status(400).json({ message: 'Insufficient quantity in stock.' });
      }
      newQuantity = foundProduct.quantity - quantity;
      transactionCost = foundProduct.price * quantity;
    } else {
      return res.status(400).json({ message: 'Invalid transaction type. Use "entrada" or "saida".' });
    }

    const newTransaction = await Transaction.create({
      product,
      type,
      quantity,
      notes,
      cost: transactionCost,
    });

    foundProduct.quantity = newQuantity;
    await foundProduct.save();

    res.status(201).json({
      message: 'Transaction recorded and inventory successfully updated.',
      transaction: newTransaction,
      product: foundProduct,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
