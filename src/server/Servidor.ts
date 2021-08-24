import { Router } from './Router';
import * as http from 'http';

export class Servidor {
    private server!: http.Server;
    private router: Router;

    constructor(
        private host: String = '127.0.0.1', 
        private puerto: number = 3000
        ) {
        this.inicializar();
        this.router = new Router();
    }

    private inicializar() {
        this.server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            let respuesta = this.router.tratar(req.url, req, res);
            respuesta != null ? res.end(JSON.stringify(respuesta)) :  res.end();
        });
    }

    comenzar() {
        this.server.listen(this.puerto, () => {
            console.log(`Servidor escuchando en ${this.host}:${this.puerto}`);
        });
    }
}
