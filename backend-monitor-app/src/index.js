import express from 'express'
//socket.io
import http from 'http'
import { Server } from 'socket.io'
//middlewares
import cors from 'cors'
//port
import { PORT } from './config/config.js'
//path
import path from 'path';
import { fileURLToPath } from 'url';
//data watcher
import { setupDataWatcher } from './config/file_watcher.js'
//router
import { burninRouter } from './routes/burnin_data.router.js'


const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    },
});

//current dir route
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// // Servir archivos estáticos desde la carpeta 'public'
// app.use(express.static(path.join(__dirname, '..', 'public')));

app.disable("x-powered-by");

//middlewares
app.use(express.json());
app.use(cors({
    origin: ['*', 'http://localhost:5173'],
    credentials: true
}));

//routes...
app.use('/', burninRouter);


// // Manejar todas las demás rutas y servir el archivo index.html
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
// });

//watcher
setupDataWatcher(io)

//socket.io
io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);

    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
});

// start server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});