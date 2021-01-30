import { Component, Input } from '@angular/core';
import { UserModel } from 'src/app/Models/user-model';
import { UserService } from 'src/app/Services/user-service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  @Input()
  public user: UserModel

  constructor(
    private userService: UserService
  ) { }

  onClick(){
    this.userService.deleteUser(this.user.userId).subscribe()
  }
}
