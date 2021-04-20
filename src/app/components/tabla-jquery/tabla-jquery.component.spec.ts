import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaJqueryComponent } from './tabla-jquery.component';

describe('TablaJqueryComponent', () => {
  let component: TablaJqueryComponent;
  let fixture: ComponentFixture<TablaJqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaJqueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaJqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
