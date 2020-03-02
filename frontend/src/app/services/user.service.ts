import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api_config';
import { CredenciaisDTO } from '../models/credenciais.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(cred: CredenciaisDTO) {
    return this.http.post(`${API_CONFIG.baseUrl}user/`, cred,
      {
        observe: "response",
        responseType: "text"
      })
  }
}
