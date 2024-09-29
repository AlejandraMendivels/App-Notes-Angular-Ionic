import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AnimationController } from '@ionic/angular';
import { Materia, Nota } from '../../models/models';
import { MateriasService } from '../../services/materias.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-materia',
  templateUrl: './crear-materia.page.html',
  styleUrls: ['./crear-materia.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CrearMateriaPage implements OnInit {
  @ViewChild('submitBtn', { read: ElementRef }) submitBtn!: ElementRef;

  materia: Materia = {
    id: '',
    nombre: '',
    semestre: 0,
    codigo: '',
    horario: '',
    observaciones: '',
    notas: []
  };

  nuevaNota: Nota = {
    fechaEntrega: new Date(),
    descripcion: '',
    nota: 0,
    corte: 1
  };

  constructor(
    private materiasService: MateriasService,
    private router: Router,
    private animationCtrl: AnimationController
  ) {}

  ngOnInit() {}

  generateId() {
    return Math.random().toString(36).substring(2);
  }

  agregarNota() {
    this.materia.notas.push({ ...this.nuevaNota });
    this.nuevaNota = { fechaEntrega: new Date(), descripcion: '', nota: 0, corte: 1 }; // Reinicia la nota
  }

  eliminarNota(index: number) {
    this.materia.notas.splice(index, 1);
  }

  crearMateria() {
    this.materia.id = this.generateId();
    this.materiasService.addMateria(this.materia);
    this.playButtonAnimation();
    setTimeout(() => {
      this.router.navigate(['/lista-materias']);
    }, 500); 
  }

  playButtonAnimation() {
    const animation = this.animationCtrl.create()
      .addElement(this.submitBtn.nativeElement)
      .duration(500)
      .easing('ease-out')
      .keyframes([
        { offset: 0, opacity: '1', transform: 'scale(1)' },
        { offset: 0.5, opacity: '0.8', transform: 'scale(1.1)' },
        { offset: 1, opacity: '1', transform: 'scale(1)' }
      ]);

    animation.play();
  }
}
