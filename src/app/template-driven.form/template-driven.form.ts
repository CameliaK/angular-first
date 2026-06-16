import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-template-driven.form',
  imports: [FormsModule],
  templateUrl: './template-driven.form.html',
  styleUrl: './template-driven.form.scss',
})
export class TemplateDrivenForm {

  userObject : User = {};

  onSubmit(userForm : NgForm){
    console.log(userForm.value);
    
  }
}
