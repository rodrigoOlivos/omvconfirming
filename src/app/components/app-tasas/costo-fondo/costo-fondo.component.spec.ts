import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostoFondoComponent } from './costo-fondo.component';

describe('CostoFondoComponent', () => {
  let component: CostoFondoComponent;
  let fixture: ComponentFixture<CostoFondoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostoFondoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostoFondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
