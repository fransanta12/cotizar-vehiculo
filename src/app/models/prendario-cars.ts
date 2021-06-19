import { IPrendarioCars } from './iprendario-cars';
import { Values } from './values';

export class PrendarioCars implements IPrendarioCars {
    cod:string;
    msj:string;
    values:Values;

    constructor(cod:string,msj:string,values:Values){
        this.cod = cod;
        this.msj = msj;
        this.values = values;
    }
}
