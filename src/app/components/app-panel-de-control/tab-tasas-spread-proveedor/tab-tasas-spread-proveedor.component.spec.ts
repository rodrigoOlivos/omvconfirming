import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabTasasSpreadProveedorComponent } from './tab-tasas-spread-proveedor.component';

describe('TabTasasSpreadProveedorComponent', () => {
  let component: TabTasasSpreadProveedorComponent;
  let fixture: ComponentFixture<TabTasasSpreadProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabTasasSpreadProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabTasasSpreadProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
