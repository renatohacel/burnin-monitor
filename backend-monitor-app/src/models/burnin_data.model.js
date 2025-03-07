import fs from 'fs/promises';
import path from 'path';
import { DATA_PATH } from '../config/config.js';

export class BurninDataModel {
    static async getAll() {
        const data = {};

        try {
            // Leer todos los archivos en el directorio DATA_PATH de manera asíncrona
            const files = await fs.readdir(DATA_PATH);

            // Procesar cada archivo de manera asíncrona
            await Promise.all(files.map(async (file) => {
                if (path.extname(file) === '.json') {
                    const filePath = path.join(DATA_PATH, file);
                    const fileContent = await fs.readFile(filePath, 'utf-8');
                    const fileName = path.basename(file, '.json');

                    // Parsear el contenido JSON y almacenarlo en el objeto
                    data[fileName] = JSON.parse(fileContent);
                }
            }));
        } catch (error) {
            console.error('Error al leer los archivos:', error);
        }

        return data;
    }
}
