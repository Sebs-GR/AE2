import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './config/database.js';
import symptomLogRoutes from './routes/symptomLogRoutes.js';

const app = express();
const PORT = process.env.PORT || 3002;

// Configuración de CORS
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use('/api', symptomLogRoutes);

app.get('/', (req, res) => {
    res.send('Symptom Logging Service is running!');
});

// Manejo de errores no capturados
process.on('unhandledRejection', (reason) => {
    console.error('Unhandled Rejection:', reason);
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});

// Intentar conectar a la base de datos y luego iniciar el servidor
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Symptom service running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to database:', err);
    process.exit(1); // Salir si la conexión falla
  });