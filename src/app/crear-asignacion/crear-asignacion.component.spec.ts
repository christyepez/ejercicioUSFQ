import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAsignacionComponent } from './crear-asignacion.component';

describe('CrearAsignacionComponent', () => {
  let component: CrearAsignacionComponent;
  let fixture: ComponentFixture<CrearAsignacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAsignacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAsignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
