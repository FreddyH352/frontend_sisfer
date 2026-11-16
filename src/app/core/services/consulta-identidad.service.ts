import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../constants/api.constants';

export interface DatosDni {
  numero: string;
  nombres: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  nombreCompleto: string;
}

export interface DatosRuc {
  numero: string;
  razonSocial: string;
  direccion: string;
  estado: string;
  condicion: string;
}

@Injectable({ providedIn: 'root' })
export class ConsultaIdentidadService {
  private readonly http = inject(HttpClient);

  dni(numero: string): Observable<DatosDni> {
    return this.http.get<DatosDni>(`${API_URL}/consulta/dni/${numero}`, { withCredentials: true });
  }

  ruc(numero: string): Observable<DatosRuc> {
    return this.http.get<DatosRuc>(`${API_URL}/consulta/ruc/${numero}`, { withCredentials: true });
  }
}
