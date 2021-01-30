import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from '../../Models/user-model';
import { UserService } from '../../Services/user-service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  minDate: Date;
  maxDate: Date;
  registerForm: FormGroup;
  validation = true;
  constructor(
    private formbuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 90, 0, 1);
    this.maxDate = new Date();

    this.registerForm = this.formbuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', [Validators.required]],
      educationLevel: ['', [Validators.required]]
    })
  }

  onFormSubmit(){
    var user = new UserModel();
    user.birthDate = this.registerForm.controls["birthDate"].value;
    user.userEducationLevel = this.registerForm.controls["educationLevel"].value;
    user.email = this.registerForm.controls["email"].value;
    user.firstName = this.registerForm.controls["firstName"].value;
    user.lastName = this.registerForm.controls["lastName"].value;

    this.userService.registerUser(user)
      .subscribe()
  }

}
