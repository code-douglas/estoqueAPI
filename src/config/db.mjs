import mongoose from 'mongoose';

const connectDB = async (uri) => {
  try {
    if (!uri) {
      throw new Error('A URI do MongoDB não está definida.');
    }
    await mongoose.connect(uri);
    console.log('Conexão com MongoDB bem-sucedida!');
  } catch (err) {
    console.error('Erro ao conectar com MongoDB:', err);
    process.exit(1);
  }
};

export default connectDB;
