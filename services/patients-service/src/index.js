import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './config/database.js';
import patientRoutes from './routes/patientRoutes.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Configuración de CORS
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use('/api', patientRoutes);

app.get('/', (req, res) => {
    res.send('Patient Service is running!');
});

// Manejo de errores no capturados
process.on('unhandledRejection', (reason) => {
    console.error('Unhandled Rejection:', reason);
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});

// Conexión a DB + inicio del servidor
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Patient service running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to database:', err);
    process.exit(1); // Salir si la conexión falla
  });