import { Persistente } from "../entities/Persistente";

export interface IRepositorio<T extends Persistente> {
    buscar(id: number) : T|undefined;
    buscarTodos(): Array<T>;
    agregar(entidad: T) : void;
    elminar(entidad: T): void;
    modificar(entidad: T): void;
}
