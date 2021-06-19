import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionVehiculoComponent } from './cotizacion-vehiculo.component';

describe('CotizacionVehiculoComponent', () => {
  let component: CotizacionVehiculoComponent;
  let fixture: ComponentFixture<CotizacionVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotizacionVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
