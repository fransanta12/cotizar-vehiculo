import { IValues } from './ivalues';
import { Usd } from './usd';

export class Values implements IValues{
    idCondition:number;
    cuota:number;
    lifeInsurance:number;
    unemploymentInsurance6:number;//
    unemploymentInsurance12:number;
    nombrefacilidad:string;
    moneda:string;
    usd:Usd;

    constructor(idCondition:number,cuota:number,lifeInsurance:number,unemploymentInsurance6:number,unemploymentInsurance12:number,nombrefacilidad:string,moneda:string,usd:Usd){
        this.idCondition = idCondition;
        this.cuota = cuota;
        this.lifeInsurance = lifeInsurance;
        this.unemploymentInsurance6 = unemploymentInsurance6;
        this.unemploymentInsurance12 = unemploymentInsurance12;
        this.nombrefacilidad = nombrefacilidad;
        this.moneda = moneda;
        this.usd = usd;
    }
}
