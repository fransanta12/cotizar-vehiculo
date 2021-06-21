import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { RestService } from '../../service/rest.service';
import { environment } from '../../../environments/environment';
import { URL_BASE } from '../../../environments/environment';
import { IPrendarioCars } from '../../models/iprendario-cars';

@Component({
  selector: 'app-resumen-cotizacion',
  templateUrl: './resumen-cotizacion.component.html',
  styleUrls: ['./resumen-cotizacion.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ResumenCotizacionComponent implements OnInit {

  @Input() totalValor:number=0;
  @Input() primaCarro:number=0;
  @Input() iPrendarioCars?:IPrendarioCars;
  @Input() anno?:number;
  deudaTotal:Array<Object>=[];
  cuotaTotal:Array<Object>=[];
  sVida:boolean=false;
  sDesempleo:number=0;

  montoFinanciar:number=0;
  comision:number=0;
  totalFinanciamiento:number=0;
  cuotaPrestamo:number=0;
  seguroVehiculo:number=0;
  seguroVida:number=0;
  seguroDesempleo:number = 0
  
  constructor() { 
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.totalValor != undefined && this.primaCarro != undefined && this.iPrendarioCars != undefined){
      this.MontoTotalFinanciar();
    }
  }

  DatosDeuda(){
    //this.deudaTotal.push({texto:"",valor:""})
  }
  
  MontoTotalFinanciar(){
    if(this.iPrendarioCars != undefined){
      this.montoFinanciar = this.totalValor-this.primaCarro;
      this.comision = this.montoFinanciar*this.iPrendarioCars.values.usd.years[0].commission;
      this.totalFinanciamiento = this.montoFinanciar + this.comision;;
      this.cuotaPrestamo = this.totalFinanciamiento * this.iPrendarioCars.values.cuota
      this.seguroVehiculo = this.cuotaPrestamo*this.iPrendarioCars.values.usd.years[0].insuranceCoverage.CoberturaA.value;
      this.seguroVida = this.montoFinanciar*this.iPrendarioCars.values.lifeInsurance;
      // this.seguroDesempleo = this
    }
    
  }

  // CuotaMensualTotal(){
  //   if(this.iPrendarioCars != undefined){
  //     let cuotaPrestamo = this.deudaTotal[2].detalleValor
  //     this.cuotaTotal.push()
  //   }
  // }

}
