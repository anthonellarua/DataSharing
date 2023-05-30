import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private datosFormulario: any;

  setDatos(datos: any) {
    this.datosFormulario = datos;
  }

  getDatos() {
    return this.datosFormulario;
  }
}
