import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { RestService } from '../../service/rest.service';
import { environment } from '../../../environments/environment';
import { URL_BASE } from '../../../environments/environment';
import { IPrendarioCars } from '../../models/iprendario-cars';

@Component({
  selector: 'app-menu-stepper',
  templateUrl: './menu-stepper.component.html',
  styleUrls: ['./menu-stepper.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class MenuStepperComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  public iPrendarioCars:any

  constructor(private _formBuilder: FormBuilder,private restService:RestService) {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.restService.GET(`${URL_BASE}${environment.cars}`).subscribe((res:IPrendarioCars) => {
      this.iPrendarioCars = res;
      console.log(this.iPrendarioCars)
      
    });
   }

  ngOnInit(): void {
  }

  

}
