import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Please  provide product name'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters'],
  },
  barcode: {
    type: String,
    required: [true, 'Please provide a barcode'],
    unique: true,
    trim: true,
  },
  sku: {
    type: String,
    require: [true, 'Please  provide SKU'],
    unique: [true, 'SKU must be unique'],
    trim: true,
  },
  description: {
    type: String,
    maxlength: [1000, 'Description cannot be more than 1000 characters']
  },
  quantity: {
    type: Number,
    require: [true, 'Please provide a quantity'],
    min: [0, 'Quantity cannot be less than 0'],
  },
  price: {
    type: Number,
    required: [true, 'Please provice a price'],
    min: [0, 'Price cannot be less than 0'],
  },
}, { timestamps: true, });

const Product = mongoose.model('Product', productSchema);

export default Product;
