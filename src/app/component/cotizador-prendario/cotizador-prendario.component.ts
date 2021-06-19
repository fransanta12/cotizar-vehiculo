import { Component, OnInit } from '@angular/core';
import { IPrendarioCars } from '../../models/iprendario-cars';

@Component({
  selector: 'app-cotizador-prendario',
  templateUrl: './cotizador-prendario.component.html',
  styleUrls: ['./cotizador-prendario.component.css']
})
export class CotizadorPrendarioComponent implements OnInit {
  iPrendarioCars?:IPrendarioCars;
  constructor() {
    // this.iPrendarioCars = {
    //   cod: "000000",
    //   msj: "Ok",
    //   values: {
    //       idCondition: 1,
    //       cuota: 1.5,
    //       lifeInsurance: 0.02693,
    //       unemploymentInsurance6: 3.0849,
    //       unemploymentInsurance12: 6.1698,
    //       nombrefacilidad: "vehículo nuevo",
    //       moneda: "BOTH",
    //       usd: {
    //           minimumAmount: 5000,
    //           maximumAmount: 75000,
    //           rateReference: "TRI 12 meses + margen aplicable ",
    //           amountList: [
    //               5000,
    //               22500,
    //               40000,
    //               57500,
    //               75000
    //           ],
    //           yearsList: [
    //               2020,
    //               2021
    //           ],
    //           minYear: 2020,
    //           maxYear: 2021,
    //           years: [
    //               {
    //                   year: 2020,
    //                   minBonus: 20,
    //                   maxBonus: 80,
    //                   minimumTerm: 48,
    //                   maximumTerm: 96,
    //                   commission: 3.25,
    //                   rate1: 7.75,
    //                   starMonth1: 1,
    //                   endMonth1: 24,
    //                   typeRate1: "F",
    //                   rate2: 0,
    //                   starMonth2: 0,
    //                   endMonth2: 0,
    //                   typeRate2: null,
    //                   rate3: 0,
    //                   starMonth3: 0,
    //                   endMonth3: 0,
    //                   typeRate3: null,
    //                   rate4: 0,
    //                   starMonth4: 0,
    //                   endMonth4: 0,
    //                   typeRate4: null,
    //                   insuranceCoverage: {
    //                       CoberturaA: {
    //                           value: 42.714
    //                       },
    //                       CoberturaB: {
    //                           value: 75.258
    //                       },
    //                       CoberturaC: {
    //                           value: 24.408
    //                       },
    //                       CoberturaD: {
    //                           value: 0.706815
    //                       },
    //                       CoberturaE: {
    //                           value: 1.194975
    //                       },
    //                       CoberturaJ: {
    //                           value: 27.12
    //                       }
    //                   },
    //                   bonusList: [
    //                       20,
    //                       35,
    //                       50,
    //                       65,
    //                       80
    //                   ],
    //                   monthList: [
    //                       48,
    //                       60,
    //                       72,
    //                       84,
    //                       96
    //                   ]
    //               },
    //               {
    //                   year: 2021,
    //                   minBonus: 20,
    //                   maxBonus: 80,
    //                   minimumTerm: 48,
    //                   maximumTerm: 96,
    //                   commission: 3.25,
    //                   rate1: 7.75,
    //                   starMonth1: 1,
    //                   endMonth1: 24,
    //                   typeRate1: "F",
    //                   rate2: 0,
    //                   starMonth2: 0,
    //                   endMonth2: 0,
    //                   typeRate2: null,
    //                   rate3: 0,
    //                   starMonth3: 0,
    //                   endMonth3: 0,
    //                   typeRate3: null,
    //                   rate4: 0,
    //                   starMonth4: 0,
    //                   endMonth4: 0,
    //                   typeRate4: null,
    //                   insuranceCoverage: {
    //                       CoberturaA: {
    //                           value: 42.714
    //                       },
    //                       CoberturaB: {
    //                           value: 75.258
    //                       },
    //                       CoberturaC: {
    //                           value: 24.408
    //                       },
    //                       CoberturaD: {
    //                           value: 0.70681
    //                       },
    //                       CoberturaE: {
    //                           value: 1.194975
    //                       },
    //                       CoberturaJ: {
    //                           value: 27.12
    //                       }
    //                   },
    //                   bonusList: [
    //                       20,
    //                       35,
    //                       50,
    //                       65,
    //                       80
    //                   ],
    //                   monthList: [
    //                       48,
    //                       60,
    //                       72,
    //                       84,
    //                       96
    //                   ]
    //               }
    //           ]
    //       }
    //   }
    // }
    // console.log(this.iPrendarioCars)
   }

  ngOnInit(): void {
    // this.restService.GET(`${URL_BASE}${environment.cars}`).subscribe((res:IPrendarioCars) => this.obtener(res));
    
  }

  obtener(valores: IPrendarioCars){
      console.log(valores);
      this.iPrendarioCars = valores;
      console.log(this.iPrendarioCars);
  }

}