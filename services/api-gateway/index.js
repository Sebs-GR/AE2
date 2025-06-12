const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const PORT = process.env.PORT || 3000;

// Proxy para pacientes
app.use('/patients', createProxyMiddleware({
  target: 'http://patients-service:3001',
  changeOrigin: true,
  pathRewrite: {
    '^/patients': '/api/patients',
  },
}));

// Proxy para síntomas
app.use('/symptoms', createProxyMiddleware({
  target: 'http://symptoms-service:3002',
  changeOrigin: true,
  pathRewrite: {
    '^/symptoms': '/api/symptoms',
  },
}));

app.get('/', (req, res) => {
  res.send('API Gateway funcionando');
});

app.listen(PORT, () => {
  console.log(`API Gateway escuchando en el puerto ${PORT}`);
});