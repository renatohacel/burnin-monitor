import chokidar from 'chokidar'
import path from 'path'
import { DATA_PATH } from './config.js'

const data_path = path.resolve(DATA_PATH);

const watcher = chokidar.watch(data_path, {
    persistent: true
})

const setupDataWatcher = (io) => {
    watcher.on('change', (path) => {
        console.log(`File ${path} has been changed`)
        io.emit('data_changed')
    })
}

export { setupDataWatcher }