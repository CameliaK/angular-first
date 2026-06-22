import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { log } from 'node:console';
import { first } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.scss',
})
export class ReactiveForm {
  reactiveForm : FormGroup;

  constructor(){
    this.reactiveForm = new FormGroup({
      firstName : new FormControl(""),
      lastName : new FormControl(""),
      email : new FormControl(""),
      password : new FormControl(),
      isChecked : new FormControl(),
      address : new FormGroup({
        city : new FormControl(""),
        street : new FormControl(""),
        pincode : new FormControl(),
      })
    })
  }

  onSubmit(){
    console.log(this.reactiveForm.value);
    
  }
}
