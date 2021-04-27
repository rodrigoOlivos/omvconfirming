import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlLabelUsuarioComponent } from './html-label-usuario.component';

describe('HtmlInputUsuarioComponent', () => {
  let component: HtmlLabelUsuarioComponent;
  let fixture: ComponentFixture<HtmlLabelUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlLabelUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlLabelUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
