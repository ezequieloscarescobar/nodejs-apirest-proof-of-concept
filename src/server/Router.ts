import { HogaresController } from './../controllers/HogaresController';
import * as http from 'http';

export class Router {
    private controllers = [
        { recurso: 'hogares', controller: new HogaresController() }
    ];


    tratar(ruta: string|undefined, req: http.IncomingMessage, res: http.ServerResponse) {
        let respuesta = null;
        switch(req.url) {
            case '/': respuesta = {success: "Hello node"}; break;
            case '/hogares': {
                let controller = this.buscarControllerSegunRecurso('hogares');
                switch(req.method) {
                    case 'GET': respuesta = controller?.buscarTodos(req, res); break;
                    case 'POST': respuesta = controller?.agregar(req, res); break;
                }
            }; break;
            default: res.statusCode = 404; break;
        }
        return respuesta;
    }

    private buscarControllerSegunRecurso(recurso: string) {
        return this.controllers.find(c => c.recurso === recurso)?.controller;
    }
}
