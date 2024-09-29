import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'crear-materia',
    pathMatch: 'full',
  },
  {
    path: 'page',
    loadComponent: () => import('./page/page.page').then( m => m.PagePage)
  },
  {
    path: 'crear-materia',
    loadComponent: () => import('./page/crear-materia/crear-materia.page').then( m => m.CrearMateriaPage)
  },
  {
    path: 'detalle-materia',
    loadComponent: () => import('./page/detalle-materia/detalle-materia.page').then( m => m.DetalleMateriaPage)
  },
  {
    path: 'lista-materias',  
    loadComponent: () => import('./page/lista-materias/lista-materias.page').then( m => m.ListaMateriasPage)
  },
  
];
