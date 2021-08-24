import { DAOMemoHogares } from './../models/repositories/daos/DAOMemoHogares';
import { Repositorio } from './../models/repositories/Repositorio';
import { IRepositorio } from './../models/repositories/IRepositorio';
import * as http from 'http';
import { Hogar } from '../models/entities/Hogar';
import { Admision } from '../models/entities/Admision';
import { Direccion } from '../models/entities/Direccion';

export class HogaresController {
    private repositorio: IRepositorio<Hogar>;

    constructor() {
        this.repositorio = new Repositorio(new DAOMemoHogares());
    }

    buscarTodos(req: http.IncomingMessage, res: http.ServerResponse) {
        return this.repositorio.buscarTodos();
    }

    agregar(req: http.IncomingMessage, res: http.ServerResponse) {
        let body : any = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {
            body = JSON.parse(Buffer.concat(body).toString());

            const nuevoHogar = new Hogar(
                body.nombre, 
                new Admision(body.admisiones.perros, body.admisiones.gatos), 
                new Direccion(body.ubicacion.direccion, body.ubicacion.lat, body.ubicacion.long),
                body.capacidad, 
                body.lugares_disponibles
                );
            this.repositorio.agregar(nuevoHogar);
        });
        return;
    }
}
