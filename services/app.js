import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import pkg from 'pg';

const { Pool } = pkg;

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configuración de la base de datos
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
      rejectUnauthorized: false, // Permitir conexiones no verificadas (opcional para simplificar)
    },
  });
  

// Endpoint de registro
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id',
      [username, password]
    );
    res.status(201).json({ message: `User ${username} registered successfully!`, userId: result.rows[0].id });
  } catch (error) {
    console.error('Error during user registration:', error);
    res.status(400).json({ error: 'User registration failed!' });
  }
});

// Endpoint de inicio de sesión
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await pool.query('SELECT * FROM users WHERE username = $1 AND password = $2', [
      username,
      password,
    ]);
    if (result.rows.length > 0) {
      res.json({ message: 'Login successful!', userId: result.rows[0].id });
    } else {
      res.status(401).json({ error: 'Invalid credentials!' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'An error occurred during login.' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
