import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HtmlInputSpreadProrrComponent} from './html-input-spread-prorr.component';

describe('HtmlInputSpreadProrrComponent', () => {
  let component: HtmlInputSpreadProrrComponent;
  let fixture: ComponentFixture<HtmlInputSpreadProrrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HtmlInputSpreadProrrComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlInputSpreadProrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
