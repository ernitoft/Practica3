import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-editarusuario',
  templateUrl: './editarusuario.page.html',
  styleUrls: ['./editarusuario.page.scss'],
})
export class EditarusuarioPage implements OnInit {

  data: any = [];
  tecnologias: any = [];
  interes: any = [];

  constructor(private apiService: ApiService, public router: Router, public navCtrl: NavController) { }

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
