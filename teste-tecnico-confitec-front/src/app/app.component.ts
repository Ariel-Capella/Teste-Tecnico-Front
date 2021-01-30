import { Component } from '@angular/core';
import { UserModel } from './Models/user-model';
import { UserService } from './Services/user-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public userList: UserModel[];

  constructor (
    private userService: UserService
  ) { }

  public onClick(){
    this.userService.getUserList()
      .subscribe(
        data => {
          this.userList = data;
        }
      )
  }

}
