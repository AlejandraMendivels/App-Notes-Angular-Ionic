import { Component, Input } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { Nota } from '../../src/app/models/models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-nota-modal',
  templateUrl: './agregar-nota-modal.component.html',
  styleUrls: ['./agregar-nota-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class AgregarNotaModalComponent {
  @Input() nota: Nota = { descripcion: '', nota: 0, corte: 1, fechaEntrega: new Date() };

  cortes = [
    { label: 'Primer 20%', value: 1 },
    { label: 'Segundo 20%', value: 2 },
    { label: 'Tercer 20%', value: 3 },
    { label: '40% Final', value: 4 }
  ];

  constructor(private modalCtrl: ModalController) {}

  cancelar() {
    this.modalCtrl.dismiss();
  }

  agregar() {
    this.modalCtrl.dismiss(this.nota);
  }
}
