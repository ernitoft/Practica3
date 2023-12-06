import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private endPoint = 'http://127.0.0.1:8000/api/profile ';
  
  constructor(private http: HttpClient) { }

  public getProfile() {
    return this.http.get<any>(this.endPoint);
  }

  public updateProfile(profile: any) {
    return this.http.put<any>(this.endPoint+"/update/"+profile.id, profile);
  }

  public updateInterests(interes: any) {
    return this.http.put<any>(this.endPoint+"/interes/"+interes.id, interes);
  }

  public updateTecnologies(tecn: any) {
    return this.http.put<any>(this.endPoint+"/tecnologies/"+tecn.id, tecn);
  }
}
