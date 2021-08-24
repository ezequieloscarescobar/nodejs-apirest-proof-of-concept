export abstract class Persistente {
    protected id: number|string|void;
    private static generador = Persistente.generadorDeIds();

    private static *generadorDeIds() {
        var indice = 0;
        while (true)
            yield indice++;
    }

    constructor() {
        this.id = Persistente.generador.next().value;
    }

    setId(id: number|string|void) {
        this.id = id;
    }

    getId() {
        return this.id;
    }
}
