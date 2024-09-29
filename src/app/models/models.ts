export interface Nota {
    fechaEntrega: Date;
    descripcion: string;
    nota: number;
    observaciones?: string;
    corte: number; // 1, 2, 3 o 4
  }
  
  export interface Materia {
    id: string;
    nombre: string;
    semestre: number;
    codigo: string;
    horario: string;
    observaciones?: string;
    notas: Nota[];
  }
  