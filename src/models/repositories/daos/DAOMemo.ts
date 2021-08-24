import { Persistente } from '../../entities/Persistente';
import { IDAO } from './IDAO';

export class DAOMemo<T extends Persistente> implements IDAO<T> {
    protected coleccion: Array<T> = [];

    buscar(id: number): T|undefined {
        return this.coleccion.find(e => e.getId() == id);
    }

    buscarTodos(): T[] {
        return [...this.coleccion];
    }

    agregar(entidad: T): void {
        this.coleccion.push(entidad);
    }

    elminar(entidad: T): void {
        this.coleccion = this.coleccion.filter(e => e.getId() != e.getId());
    }

    modificar(entidad: T): void {
        !this.coleccion.includes(entidad)? this.coleccion.push(entidad) : null;
    }
}
