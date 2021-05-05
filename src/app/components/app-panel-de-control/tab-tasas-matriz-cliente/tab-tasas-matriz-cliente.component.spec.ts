import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabTasasMatrizClienteComponent } from './tab-tasas-matriz-cliente.component';

describe('TabTasasMatrizClienteComponent', () => {
  let component: TabTasasMatrizClienteComponent;
  let fixture: ComponentFixture<TabTasasMatrizClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabTasasMatrizClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabTasasMatrizClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
