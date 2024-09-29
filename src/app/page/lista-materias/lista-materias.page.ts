import { Component, OnInit } from '@angular/core';
import { MateriasService } from '../../services/materias.service.service';
import { Materia } from '../../models/models';
import { IonicModule, AlertController, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgregarNotaModalComponent } from '../../agregar-nota-modal.component';

@Component({
  selector: 'app-lista-materias',
  templateUrl: './lista-materias.page.html',
  styleUrls: ['./lista-materias.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ListaMateriasPage implements OnInit {
  materias: (Materia & { showNotas?: boolean })[] = [];  // Extender modelo para incluir showNotas

  constructor(
    private materiasService: MateriasService,
    private alertController: AlertController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.loadMaterias();
  }

  loadMaterias() {
    this.materias = this.materiasService.getMaterias().map(materia => ({
      ...materia,
      showNotas: false // Inicializar propiedad showNotas en false
    }));
  }

  async presentNotaForm(materia: Materia) {
    const modal = await this.modalCtrl.create({
      component: AgregarNotaModalComponent,
      componentProps: { nota: { descripcion: '', nota: 0, corte: 1, fechaEntrega: new Date() } }
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      materia.notas.push(data);
      this.materiasService.updateMateria(materia);
    }
  }

  eliminarNota(materia: Materia, index: number) {
    materia.notas.splice(index, 1);
    this.materiasService.updateMateria(materia);
  }

  async confirmDeleteMateria(materia: Materia) {
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: '¿Estás seguro de que deseas eliminar esta materia?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'Eliminar', handler: () => this.deleteMateria(materia) }
      ]
    });

    await alert.present();
  }

  deleteMateria(materia: Materia) {
    if (materia.notas.length === 0) {
      this.materiasService.deleteMateria(materia.id);
      this.loadMaterias();
    } else {
      this.alertController.create({
        header: 'Error',
        message: 'No se puede eliminar una materia que tiene notas registradas.',
        buttons: ['OK']
      }).then(alert => alert.present());
    }
  }

  pasaMateria(materia: Materia): boolean {
    const promedio = materia.notas.reduce((sum, nota) => sum + nota.nota, 0) / materia.notas.length;
    return promedio >= 3.0;
  }
}
