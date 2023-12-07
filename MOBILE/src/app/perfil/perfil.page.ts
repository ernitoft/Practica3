import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  
  data: any = [];
  tecnologias: any = [];
  interes: any = [];

  constructor(private apiService: ApiService, public router: Router) { }

  ngOnInit() {
    this.rellenoDatos();
  }

irEditarUsuario() {
  this.router.navigate(['/editarusuario']);
}


  rellenoDatos() {
    this.apiService.getProfile().subscribe((data) => {
      this.data = data;
      this.tecnologias = this.data[0].tecnologias;
      this.interes = this.data[0].interes;
    });
  }
  navegarEditar() {
    this.router.navigate(['edit-usuario']);
  }
}
