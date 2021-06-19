import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuStepperComponent } from './menu-stepper.component';

describe('MenuStepperComponent', () => {
  let component: MenuStepperComponent;
  let fixture: ComponentFixture<MenuStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
