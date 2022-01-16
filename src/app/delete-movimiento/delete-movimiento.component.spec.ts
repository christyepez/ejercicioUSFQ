import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMovimientoComponent } from './delete-movimiento.component';

describe('DeleteMovimientoComponent', () => {
  let component: DeleteMovimientoComponent;
  let fixture: ComponentFixture<DeleteMovimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMovimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
