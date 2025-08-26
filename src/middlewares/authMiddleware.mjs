import admin from 'firebase-admin';
import dotenv from 'dotenv';
dotenv.config();

const serviceAccount = {
  'type': process.env.FIREBASE_TYPE,
  'project_id': process.env.FIREBASE_PROJECT_ID,
  'private_key_id': process.env.FIREBASE_PRIVATE_KEY_ID,
  'private_key': (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
  'client_email': process.env.FIREBASE_CLIENT_EMAIL,
  'client_id': process.env.FIREBASE_CLIENT_ID,
  'auth_uri': process.env.FIREBASE_AUTH_URI,
  'token_uri': process.env.FIREBASE_TOKEN_URI,
  'auth_provider_x509_cert_url': process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  'client_x509_cert_url': process.env.FIREBASE_CLIENT_X509_CERT_URL,
  'universe_domain': process.env.FIREBASE_UNIVERSE_DOMAIN
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.status(401).json({ message: 'Token de autenticação não fornecido.' });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Erro ao verificar o token:', error);
    return res.status(403).json({ message: 'Token de autenticação inválido.' });
  }
};
