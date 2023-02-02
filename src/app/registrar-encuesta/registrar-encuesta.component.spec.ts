import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEncuestaComponent } from './registrar-encuesta.component';

describe('RegistrarEncuestaComponent', () => {
  let component: RegistrarEncuestaComponent;
  let fixture: ComponentFixture<RegistrarEncuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarEncuestaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
