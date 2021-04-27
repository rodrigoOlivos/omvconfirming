import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsuariosListadoComponent } from './admin-usuarios-listado.component';

describe('AdminUsuariosListadoComponent', () => {
  let component: AdminUsuariosListadoComponent;
  let fixture: ComponentFixture<AdminUsuariosListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUsuariosListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsuariosListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
