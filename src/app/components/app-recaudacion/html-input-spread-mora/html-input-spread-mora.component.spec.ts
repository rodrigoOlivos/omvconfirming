import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HtmlInputSpreadMoraComponent} from './html-input-spread-mora.component';

describe('HtmlInputSpreadMoraComponent', () => {
  let component: HtmlInputSpreadMoraComponent;
  let fixture: ComponentFixture<HtmlInputSpreadMoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HtmlInputSpreadMoraComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlInputSpreadMoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
