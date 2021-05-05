import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabConvenioClienteComponent } from './tab-convenio-cliente.component';

describe('TabConvenioClienteComponent', () => {
  let component: TabConvenioClienteComponent;
  let fixture: ComponentFixture<TabConvenioClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabConvenioClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabConvenioClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
