import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearMateriaPage } from './crear-materia.page';

describe('CrearMateriaPage', () => {
  let component: CrearMateriaPage;
  let fixture: ComponentFixture<CrearMateriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMateriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
