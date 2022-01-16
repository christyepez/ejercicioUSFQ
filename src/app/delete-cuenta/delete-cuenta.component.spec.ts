import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCuentaComponent } from './delete-cuenta.component';

describe('DeleteCuentaComponent', () => {
  let component: DeleteCuentaComponent;
  let fixture: ComponentFixture<DeleteCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
