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
  

  constructor() { }

  ngOnInit(): void {
  }

  

}
