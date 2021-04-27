import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HtmlNominasNominasComponent} from './html-nominas-nominas.component';

describe('NominasNominasComponent', () => {
  let component: HtmlNominasNominasComponent;
  let fixture: ComponentFixture<HtmlNominasNominasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HtmlNominasNominasComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlNominasNominasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
