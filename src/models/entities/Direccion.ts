export class Direccion {
    private direccion: string;
    private lat: number;
    private long: number;

    constructor(
        direccion: string,
        lat: number,
        long: number,
    ) {
        this.direccion = direccion;
        this.lat = lat;
        this.long = long;
    }
}
