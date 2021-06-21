import {IInformacion} from './iinformacion'
export class Informacion implements IInformacion {
    tipoIdentificacion:number;//enumerador
    identificacion:string;
    nombre:string;
    celular:number;
    correo:string;
    tipoIngreso:number;//enumerador
    moneda:number; //enumerador
    ingresoBruto:number;
    ingresoNeto:number;
    AntiguedadLaboral:number;
    constructor(
        tipoIdentificacion:number,
        identificacion:string,
        nombre:string,
        celular:number,
        correo:string,
        tipoIngreso:number,
        moneda:number, //enumerador
        ingresoBruto:number,
        ingresoNeto:number,
        AntiguedadLaboral:number
    ){
        this.tipoIdentificacion=tipoIdentificacion;
        this.identificacion=identificacion;
        this.nombre=nombre;
        this.celular=celular;
        this.correo=correo;
        this.tipoIngreso=tipoIngreso;
        this. moneda=moneda; //enumerador
        this.ingresoBruto=ingresoBruto;
        this.ingresoNeto=ingresoNeto;
        this.AntiguedadLaboral=AntiguedadLaboral;
    }
}
