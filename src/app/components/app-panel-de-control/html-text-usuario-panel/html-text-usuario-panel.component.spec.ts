import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlTextUsuarioPanelComponent } from './html-text-usuario-panel.component';

describe('HtmlTextUsuarioPanelComponent', () => {
  let component: HtmlTextUsuarioPanelComponent;
  let fixture: ComponentFixture<HtmlTextUsuarioPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlTextUsuarioPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlTextUsuarioPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
