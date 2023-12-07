import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-editarusuario',
  templateUrl: './editarusuario.page.html',
  styleUrls: ['./editarusuario.page.scss'],
})
export class EditarusuarioPage implements OnInit {

  data: any = [];
  tecnologias: any = [];
  interes: any = [];
  isHidden: boolean = false;
  form: FormGroup;

  constructor(private apiService: ApiService, public router: Router, public fb: FormBuilder) 
  {
    this.form = this.fb.group({
      "nombre": new FormControl("", Validators.required),
      "edad": new FormControl("", Validators.required),
      "correo": new FormControl("", Validators.required),
      "carrera": new FormControl("", Validators.required),
      "ciudad": new FormControl("", Validators.required),
      "pais": new FormControl("", Validators.required),
      "id": new FormControl("", Validators.required)
    });
   }

  ngOnInit() {
    this.rellenoDatos();
  }
  rellenoDatos() {
    this.apiService.getProfile().subscribe((data) => {
      this.data = data;
      this.tecnologias = this.data[0].tecnologias;
      this.interes = this.data[0].interes;
    });
  }
  onSubmit() {
    this.form.value.id = this.data[0].id;
    console.log(this.form.value);
    this.apiService.updateProfile(this.form.value).subscribe((data) => {
      this.data = data;
      this.rellenoDatos();
      this.form.reset();
    });
  }
}

