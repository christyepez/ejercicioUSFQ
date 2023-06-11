import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarAsignacionComponent } from './actualizar-asignacion.component';

describe('ActualizarAsignacionComponent', () => {
  let component: ActualizarAsignacionComponent;
  let fixture: ComponentFixture<ActualizarAsignacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarAsignacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarAsignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
