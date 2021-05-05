import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabTasasListaNegraComponent } from './tab-tasas-lista-negra.component';

describe('TabTasasListaNegraComponent', () => {
  let component: TabTasasListaNegraComponent;
  let fixture: ComponentFixture<TabTasasListaNegraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabTasasListaNegraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabTasasListaNegraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
