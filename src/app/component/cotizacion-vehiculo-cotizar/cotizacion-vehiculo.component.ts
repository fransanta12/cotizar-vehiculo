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
  public valuePrima: number = 5504;
  public minValuePrima: number = 2400;
  public maxValuePrima: number = 80000;
  public stepPrima: number = 776;
  public optionsPrima: Options= new Options();

  // Plazo (meses)
  public valuePlazo: number = 60;
  public minValuePlazo: number = 48;
  public maxValuePlazo: number = 96;
  public stepPlazo: number = 1;
  public optionsPlazo: Options= new Options();

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
    });
   }

  ngOnInit(): void {
  }

  ngOnChanges() {

  }

  obtener(valores: IPrendarioCars){
    this.iPrendarioCars = valores;
    console.log(this.iPrendarioCars);
    
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
      if(i==2400){
        stepsArray.push({
          value: 2400, 
          legend: '<div class="etiqueta-legend"></div>2.400'
        });
      }
      if (i==20248) {
        stepsArray.push({
          value: 20248, 
          legend: '<div class="etiqueta-legend"></div>20.248'
        });
      } 
      if (i==40424) {
        stepsArray.push({
          value: 40424, 
          legend: '<div class="etiqueta-legend"></div>40.424'
        });
      } 
      if (i==60600) {
        stepsArray.push({
          value: 60600, 
          legend: '<div class="etiqueta-legend"></div>60.600'
        });
      }
      if (i==80000) {
        stepsArray.push({
          value: 80000, 
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
}
