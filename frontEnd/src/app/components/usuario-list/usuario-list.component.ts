import { Component, OnInit } from '@angular/core';

import { UsuariosService} from '../../services/usuarios.service'

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.getUsuarios().subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

}
