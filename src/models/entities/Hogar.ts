import { Direccion } from './Direccion';
import { Admision } from './Admision';
import { Persistente } from "./Persistente";

export class Hogar extends Persistente {
    private telefono!: string;
    private patio: boolean = false;
    private caracteristicas: Array<string> = [];
    private nombre: string;
    private admisiones: Admision;
    private ubicacion: Direccion;
    private capacidad: number;
    private disponible: number;
    
    constructor(
        nombre: string,
        admisiones: Admision,
        ubicacion: Direccion,
        capacidad: number,
        disponible: number = capacidad
    ) {
        super();
        this.nombre = nombre;
        this.admisiones = admisiones;
        this.ubicacion = ubicacion;
        this.capacidad = capacidad;
        this.disponible = disponible;
    }   
}
