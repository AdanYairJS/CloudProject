import dotenv from 'dotenv';
import pkg from 'pg';

dotenv.config(); // Carga las variables de entorno desde .env

const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER, // Usuario desde el archivo .env
  host: process.env.DB_HOST, // Host desde el archivo .env
  database: process.env.DB_NAME, // Base de datos desde el archivo .env
  password: process.env.DB_PASSWORD, // Contraseña desde el archivo .env
  port: process.env.DB_PORT, // Puerto desde el archivo .env
  ssl: {
    rejectUnauthorized: false, // Ignora certificados no verificados
  },
});

(async () => {
  try {
    const client = await pool.connect(); // Establece la conexión
    console.log('Conexión exitosa a PostgreSQL con credenciales del .env');
    const result = await client.query('SELECT NOW()'); // Prueba con una consulta simple
    console.log('Resultado de la consulta:', result.rows);
    client.release(); // Libera la conexión
  } catch (error) {
    console.error('Error al conectar con PostgreSQL:', error);
  } finally {
    await pool.end(); // Finaliza el pool
  }
})();
