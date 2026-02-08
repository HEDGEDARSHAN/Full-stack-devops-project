const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Database Configuration using environment variables
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

app.get('/api/status', async (req, res) => {
  let dbStatus = "Disconnected";
  try {
    const client = await pool.connect();
    dbStatus = "Connected";
    client.release();
  } catch (err) {
    dbStatus = `Error: ${err.message}`;
  }

  res.json({
    app_name: "DevOps-Assignment-Backend", // Assignment req
    environment: process.env.NODE_ENV || "dev", // Assignment req
    timestamp: new Date().toISOString(), // Assignment req
    database_status: dbStatus // Assignment req
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});