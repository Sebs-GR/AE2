const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const router = express.Router();

router.use(
  '/',
  createProxyMiddleware({
    target: 'http://localhost:3001', // Puerto del patients-service
    changeOrigin: true,
  })
);

module.exports = router;