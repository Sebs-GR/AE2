const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const router = express.Router();

router.use(
  '/',
  createProxyMiddleware({
    target: 'http://localhost:3002', // Puerto del symptoms-service
    changeOrigin: true,
  })
);

module.exports = router;