import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAsignacionComponent } from './delete-asignacion.component';

describe('DeleteAsignacionComponent', () => {
  let component: DeleteAsignacionComponent;
  let fixture: ComponentFixture<DeleteAsignacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAsignacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAsignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
