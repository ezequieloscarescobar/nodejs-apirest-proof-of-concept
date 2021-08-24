import { DAOMemo } from './daos/DAOMemo';
import { Persistente } from '../entities/Persistente';
import { IDAO } from './daos/IDAO';
import { IRepositorio } from './IRepositorio';

export class Repositorio<T extends Persistente> implements IRepositorio<T> {
    private dao!: IDAO<T>; 

    constructor(dao: IDAO<T> = new DAOMemo()) {
        this.dao = dao;
    }

    setDao(dao: IDAO<T>) {
        this.dao = dao;
    }

    buscar(id: number) {
        return this.dao.buscar(id);
    }

    buscarTodos(): T[] {
        return this.dao.buscarTodos();
    }

    agregar(entidad: T): void {
        this.dao.agregar(entidad);
    }

    elminar(entidad: T): void {
        this.dao.elminar(entidad);
    }

    modificar(entidad: T): void {
        this.dao.modificar(entidad);
    }
}
