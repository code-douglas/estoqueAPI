import Product from '../models/Product.mjs';

export const createProduct = async(req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};

export const getProductById =  async(req, res) => {
  try {
    const { id } = req.params;

    if(!id) return res.status(400).json({ message: 'Check if product exists.' });

    const product = await Product.findById(id);

    if(!product) return res.status(400).json({ message: 'Product not found' });

    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};

export const getAllProducts = async(req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
