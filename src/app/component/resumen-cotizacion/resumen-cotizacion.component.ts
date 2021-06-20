import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Sort} from '@angular/material/sort';

@Component({
  selector: 'app-resumen-cotizacion',
  templateUrl: './resumen-cotizacion.component.html',
  styleUrls: ['./resumen-cotizacion.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ResumenCotizacionComponent implements OnInit {

  deudaTotal:Array<Object>=[]
  constructor() { 
  }

  ngOnInit(): void {
  }

  DatosDeuda(){
    //this.deudaTotal.push({texto:"",valor:""})
  }
}
