import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Conexão com MongoDB bem-sucedida!');
  } catch (err) {
    console.error('Erro ao conectar com MongoDB:', err);
    process.exit(1);
  }
};

export default connectDB;
