import mongoose from 'mongoose';

const connectDB = async (uri) => {
  try {
    if (!uri) {
      throw new Error('A URI do MongoDB não está definida.');
    }
    const conn = await mongoose.connect(uri);
    console.log(`✅ Conectado ao MongoDB: ${conn.connection.host}/${conn.connection.name}`);
  } catch (err) {
    console.error('Erro ao conectar com MongoDB:', err);
    process.exit(1);
  }
};

export default connectDB;
