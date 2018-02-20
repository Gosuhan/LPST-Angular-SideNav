import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user.service';
import { Iuser } from '../core/iuser';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: Iuser;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.selectedUser;
    console.log('ONINIT user : ', this.user);
  }

  onSubmit() {
    //console.log('ONSUBMIT user : ${this.user}');
    console.log('ONSUBMIT user :' , this.user);
    this.userService.update().subscribe();
    // 1. userService.update(this.user)
    // 2. Afficher un message de confirmation de la mise à jour
    // 3. Fermer le formulaire d'edition
  }

}
