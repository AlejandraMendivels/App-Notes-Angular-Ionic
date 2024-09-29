import { Injectable } from '@angular/core';
import { Materia, Nota } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {
  private materias: Materia[] = [];

  constructor() {
    this.loadMaterias();
  }

  // Cargar materias desde localStorage
  loadMaterias() {
    const data = localStorage.getItem('materias');
    if (data) {
      this.materias = JSON.parse(data);
    }
  }

  // Guardar materias en localStorage
  saveMaterias() {
    localStorage.setItem('materias', JSON.stringify(this.materias));
  }

  getMaterias(): Materia[] {
    return this.materias;
  }

  getMateria(id: string): Materia | undefined {
    return this.materias.find(materia => materia.id === id);
  }

  addMateria(materia: Materia) {
    this.materias.push(materia);
    console.log("Materias después de agregar:", this.materias); // Verifica el estado del array
    this.saveMaterias();
  }

  updateMateria(materia: Materia) {
    const index = this.materias.findIndex(m => m.id === materia.id);
    if (index !== -1) {
      this.materias[index] = materia;
      this.saveMaterias();
    }
  }

  deleteMateria(id: string): boolean {
    const index = this.materias.findIndex(m => m.id === id);
    if (index !== -1 && this.materias[index].notas.length === 0) {
      this.materias.splice(index, 1);
      this.saveMaterias();
      return true;
    }
    return false;
  }

  addNotaToMateria(materiaId: string, nota: Nota) {
    const materia = this.getMateria(materiaId);
    if (materia) {
      materia.notas.push(nota);
      this.saveMaterias();
    }
  }
  getMateriaByName(nombre: string): Materia | undefined {
    return this.materias.find(materia => materia.nombre.toLowerCase() === nombre.toLowerCase());
  }
  calcularPromedioMateria(materia: Materia): number {
    const totalNotas = materia.notas.reduce((sum, nota) => sum + nota.nota, 0);
    const cantidadNotas = materia.notas.length;
    
    return cantidadNotas > 0 ? totalNotas / cantidadNotas : 0;
  }
}
