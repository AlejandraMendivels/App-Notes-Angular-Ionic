import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleMateriaPage } from './detalle-materia.page';

describe('DetalleMateriaPage', () => {
  let component: DetalleMateriaPage;
  let fixture: ComponentFixture<DetalleMateriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleMateriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
