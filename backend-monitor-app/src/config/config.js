import dotenv from 'dotenv';
dotenv.config();

// Configuración de variables de entorno con valores predeterminados
export const {
    PORT = 3003,
    DATA_PATH = 'data'
} = process.env;

