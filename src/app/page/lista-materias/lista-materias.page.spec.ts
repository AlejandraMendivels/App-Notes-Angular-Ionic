import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaMateriasPage } from './lista-materias.page';

describe('ListaMateriasPage', () => {
  let component: ListaMateriasPage;
  let fixture: ComponentFixture<ListaMateriasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMateriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
