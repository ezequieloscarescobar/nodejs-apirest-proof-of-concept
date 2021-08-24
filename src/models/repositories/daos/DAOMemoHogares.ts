import { Admision } from '../../entities/Admision';
import { Direccion } from '../../entities/Direccion';
import { Hogar } from '../../entities/Hogar';
import { DAOMemo } from './DAOMemo';

export class DAOMemoHogares extends DAOMemo<Hogar> {

    constructor() {
        super();
        super.coleccion = [
            new Hogar(
                "Pensionado de mascotas 'Como en casa'", 
                new Admision(false, true), 
                new Direccion("Av. Ing Eduardo Madero 2300, B1669BZQ Del Viso, Provincia de Buenos Aires", -34.46013439745161, -58.80857841888721),
                50, 
                45
                ),
            new Hogar(
                "Adopteros Argentina", 
                new Admision(true, false), 
                new Direccion("Plaza Teniente General Emilio Mitre, Recoleta, Buenos Aires", -34.58805543938273, -58.39709555890073),
                50, 
                20
                )
        ];
    }
}
