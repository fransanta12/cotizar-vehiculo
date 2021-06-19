import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizadorPrendarioComponent } from './cotizador-prendario.component';

describe('CotizadorPrendarioComponent', () => {
  let component: CotizadorPrendarioComponent;
  let fixture: ComponentFixture<CotizadorPrendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotizadorPrendarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizadorPrendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
