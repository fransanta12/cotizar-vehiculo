import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { IPrendarioCars } from '../../models/iprendario-cars';
import { RestService } from '../../service/rest.service';
import { environment } from '../../../environments/environment';
import { URL_BASE } from '../../../environments/environment';
import { DataQuoteVehicle } from '../../models/data-quote-vehicle';

@Component({
  selector: 'app-cotizacion-vehiculo',
  templateUrl: './cotizacion-vehiculo.component.html',
  styleUrls: ['./cotizacion-vehiculo.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers:[RestService]
})
export class CotizacionVehiculoComponent implements OnInit {
  public iPrendarioCars?:IPrendarioCars;
  public mostrarValor:boolean = false;
  public mostrarPlazo:boolean = false;

  public iDataQuoteVehicle:DataQuoteVehicle = new DataQuoteVehicle();///

  // valor del vehhiculo
  public value: number = 5000;
  public minValue: number = 5000;
  public maxValue: number = 75000;
  public step: number = 2500;
  public optionsValor: Options = new Options();
  
  public valueA: number = 2019;
  public minValueA: number = 2009;
  public maxValueA: number = 2019;
  public stepA: number = 1;
  public optionsA: Options={
    showTicksValues: true,
    animateOnMove:true,
    animate:true,
    stepsArray: [
      {value: 2009, legend: '<div class="etiqueta-legend"></div>2009'},
      {value:2010},
      {value:2011, legend: '<div class="etiqueta-legend"></div>2011'},
      {value:2012},
      {value:2013, legend: '<div class="etiqueta-legend"></div>2013'},
      {value:2014},
      {value:2015, legend: '<div class="etiqueta-legend"></div>2015'},
      {value:2016},
      {value:2017, legend: '<div class="etiqueta-legend"></div>2017'},
      {value:2018},
      {value:2019, legend: '<div class="etiqueta-legend"></div>2019'}
    ]
  };
  // Prima
  public valuePrima: number = 1000;
  public minValuePrima: number = 1000;
  public maxValuePrima: number = 4000;
  public stepPrima: number = 50;
  public optionsPrima: Options= new Options();

  // Plazo (meses)
  public valuePlazo: number = 60;
  public minValuePlazo: number = 48;
  public maxValuePlazo: number = 96;
  public stepPlazo: number = 1;
  public optionsPlazo: Options= new Options();

  // detalle
  public sVida:boolean=false;
  public sDesempleo:number=0;

  montoFinanciar:number=0;
  comision:number=0;
  totalFinanciamiento:number=0;
  cuotaPrestamo:number=0;
  seguroVehiculo:number=0;
  seguroVida:number=0;
  public seguroDesempleo6:number = 0
  public seguroDesempleo12:number = 0
  // fin detalle

  /***
   * restService: enlace al servicio
   */
  constructor(private restService:RestService) {
    this.AddDatePrima();
    this.restService.GET(`${URL_BASE}${environment.cars}`).subscribe((res:IPrendarioCars) => {
      this.iPrendarioCars = res;
      console.log(res);
      this.AddPlazo();
      this.AddDataValor();
      this.MontoTotalFinanciar()
    });
   }

  ngOnInit(): void {
  }

  ngOnChanges() {
    
  }
  public sliderEvent() {
    this.MontoTotalFinanciar();
}

 

  AddDataValor(){
    if(this.iPrendarioCars != undefined){
      let stepsArray= [];
      this.minValue = this.iPrendarioCars?.values.usd.minimumAmount
      this.maxValue = this.iPrendarioCars?.values.usd.maximumAmount;
      
      for(let i = this.minValue;i<=this.maxValue;i+=this.step){
        
        let ingresado = false;
        this.iPrendarioCars?.values.usd.amountList.forEach(element => {
          if(i == element){
            stepsArray.push({
              value: element, 
              legend: '<div class="etiqueta-legend"></div>'+element
            });
            ingresado = true;
          }          
        });
        if(!ingresado){
          stepsArray.push({
            value: i
          });
        }
        
      }
      this.optionsValor = {
        showTicksValues: true,
        animateOnMove:true,
        animate:true,
        floor: this.minValue,
        ceil: this.maxValue,
        step: this.step,
        stepsArray: stepsArray
      };
      console.log(this.optionsPlazo);
      this.mostrarValor = true;
    }
  }

  public AddDatePrima(){
    let stepsArray= [];
    for(let i=this.minValuePrima;i<=this.maxValuePrima;i+=this.stepPrima){
      if(i==1000){
        stepsArray.push({
          value: 1000, 
          legend: '<div class="etiqueta-legend"></div>1000'
        });
      }
      if (i==1750) {
        stepsArray.push({
          value: 2000, 
          legend: '<div class="etiqueta-legend"></div>1750'
        });
      } 
      if (i==2500) {
        stepsArray.push({
          value: 2500, 
          legend: '<div class="etiqueta-legend"></div>2500'
        });
      } 
      if (i==3250) {
        stepsArray.push({
          value: 3250, 
          legend: '<div class="etiqueta-legend"></div>3250'
        });
      }
      if (i==4000) {
        stepsArray.push({
          value: 4000, 
          legend: '<div class="etiqueta-legend"></div>80.000'
        });
      }else {
        stepsArray.push({
          value: i
        });
      }
      
    }
    this.optionsPrima= {
      showTicksValues: true,
      animateOnMove:true,
      animate:true,
      floor: this.minValuePrima,
      ceil: this.maxValuePrima,
      step: this.stepPrima,
      stepsArray: stepsArray
    };
  }

  public AddPlazo(){
    if(this.iPrendarioCars != undefined){
      let stepsArray= [];
      this.minValuePlazo= this.iPrendarioCars?.values.usd.years[0].minimumTerm;
      this.maxValuePlazo = this.iPrendarioCars?.values.usd.years[0].maximumTerm;
      
      for(let i = this.minValuePlazo;i<=this.maxValuePlazo;i+=this.stepPlazo){
        let ingresado = false;
        this.iPrendarioCars?.values.usd.years[0].monthList.forEach(element => {
          if(i == element){
            stepsArray.push({
              value: element, 
              legend: '<div class="etiqueta-legend"></div>'+element
            });
            ingresado = true;
          }          
        });
        if(!ingresado){
          stepsArray.push({
            value: i
          });
        }        
      }
      this.optionsPlazo = {
        showTicksValues: true,
        animateOnMove:true,
        animate:true,
        floor: this.minValuePlazo,
        ceil: this.maxValuePlazo,
        step: this.stepPlazo,
        stepsArray: stepsArray
      };
      console.log(this.optionsPlazo)
      this.mostrarPlazo = true;
    }    
  }

  /**
   * detalle
   */
  MontoTotalFinanciar(){
    console.log("desempleo " + this.sDesempleo)
    console.log("detalle en cotizacion")
    console.log(this.value)
    console.log(this.valuePrima)
    if(this.iPrendarioCars != undefined){
      this.montoFinanciar = this.value-this.valuePrima;
      this.comision = this.montoFinanciar*(this.iPrendarioCars.values.usd.years[0].commission/100);
      this.totalFinanciamiento = this.montoFinanciar + this.comision;
      this.cuotaPrestamo = this.totalFinanciamiento * (this.iPrendarioCars.values.cuota/100);
      this.seguroVehiculo = this.cuotaPrestamo*(this.iPrendarioCars.values.usd.years[0].insuranceCoverage.CoberturaA.value/100);
    }    
  }
  calculoSeguroDesempleo(){
    if(this.iPrendarioCars != undefined){
      this.seguroDesempleo6 = this.seguroDesempleo12 = 0;
      if(this.sDesempleo == 1){
        this.seguroDesempleo6 = (this.cuotaPrestamo+this.seguroVehiculo+this.seguroVida)*(this.iPrendarioCars.values.unemploymentInsurance6/100)
      }
      if (this.sDesempleo == 2) {
        this.seguroDesempleo12 = (this.cuotaPrestamo+this.seguroVehiculo+this.seguroVida)*(this.iPrendarioCars.values.unemploymentInsurance12/100)
      }
    }    
  }
  calculoSeguroVida(){
    if(this.iPrendarioCars != undefined){
      this.seguroVida = 0;
      if(this.sVida){
        this.seguroVida = this.montoFinanciar*(this.iPrendarioCars.values.lifeInsurance/100);
      }
    }    
  }
}
