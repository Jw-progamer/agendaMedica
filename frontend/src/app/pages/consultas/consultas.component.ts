import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LoggedUserDTO } from 'src/app/models/logged-user.dto';
import { StoreService } from 'src/app/services/store.service';
import { JwtService } from 'src/app/services/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.sass']
})
export class ConsultasComponent implements OnInit {

  user: LoggedUserDTO
  constructor(private userService: UserService,
    private store: StoreService,
    private jwt: JwtService,
    private router: Router) { }

  ngOnInit(): void {
    let localUser= this.store.getLocalUser();
    this.userService.getUserById(localUser['claims']['user_id']).subscribe(response => {
      this.user = response as LoggedUserDTO
    },
    error => {
      alert("Erro ao recuperar Usuário")
    })
  }

  logout(){
    this.jwt.logout()
    this.router.navigate(['login'])
  }

}
