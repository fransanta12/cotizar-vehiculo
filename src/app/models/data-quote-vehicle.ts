import { IDataQuoteVehicle } from './idata-quote-vehicle';
export class DataQuoteVehicle implements IDataQuoteVehicle{
    valor?:number;
    anno?:number;
    prima?:number;
    plazo?:number;
    moneda?:number;

    constructor(valor?:number,anno?:number,prima?:number,plazo?:number,moneda?:number){
        this.valor = valor;
        this.anno = anno;
        this.prima = prima;
        this.plazo = plazo;
        this.moneda = moneda;
    }
}

