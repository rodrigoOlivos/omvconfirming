import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabTasasMatrizCostofondoComponent } from './tab-tasas-matriz-costofondo.component';

describe('TabTasasMatrizCostofondoComponent', () => {
  let component: TabTasasMatrizCostofondoComponent;
  let fixture: ComponentFixture<TabTasasMatrizCostofondoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabTasasMatrizCostofondoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabTasasMatrizCostofondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
