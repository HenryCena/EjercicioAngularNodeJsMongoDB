import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usuario} from '../models/Usuario'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  API_URL = 'http://localhost:4200/api';
  /* --proxy-config proxy.conf.json*/


  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get(`${this.API_URL}/usuario`);
  }

  getUsuario(id: string) {
    return this.http.get(`${this.API_URL}/usuario/${id}`);
  }

  saveUsuario(usuario: Usuario) {
    return this.http.post(`${this.API_URL}/usuario`, usuario);
  }

  deleteUsuario(id: string) {
    return this.http.delete(`${this.API_URL}/usuario/${id}`);
  }

  updateUsuario(id: string, updatedUsuario: Usuario): Observable<Usuario> {
    return this.http.put(`${this.API_URL}/usuario/${id}`, updatedUsuario);
  }
}
