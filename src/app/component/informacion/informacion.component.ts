import { _isNumberValue } from '@angular/cdk/coercion';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InformacionComponent implements OnInit {
  public cedula: string="";
  public celular?: number;
  public nombre: string="";
  public correo: string="";
  public TipoIdentificacion:number=1;
  public TipoIngreso:number=1;
  public moneda:string="$";

  public bruto: number=0;
  public neto: number=0;
  public antiguedadLaboral: number=6;

  
  public cedulaFormControl = new FormControl('', [
    Validators.required
  ]);
  public nombreFormControl = new FormControl('', [
    Validators.required
  ]);
  public celularFormControl = new FormControl('', [
    Validators.required
  ]);
  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  public brutoFormControl = new FormControl('', [
    Validators.required
  ]);
  public netoFormControl = new FormControl('', [
    Validators.required
  ]);
  

  constructor() { }

  ngOnInit(): void {
  }

  getMoneda(){

  }
  

}
