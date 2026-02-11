const express = require('express');
const cors = require('cors'); 
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

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
    app_name: "DevOps-Assignment-Backend",
    environment: process.env.NODE_ENV || "dev",
    timestamp: new Date().toISOString(),
    database_status: dbStatus
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend running on port ${PORT}`);
});
