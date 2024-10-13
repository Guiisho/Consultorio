import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  UserRegister:FormGroup;
  
  constructor(private fb: FormBuilder) {

    this.UserRegister = this.fb.group({
      email:['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }


  ngOnInit(): void {
  }

  registrar(){
    const email= this.UserRegister.value.email;
    const password= this.UserRegister.value.password;
    const confirmPassword= this.UserRegister.value.confirmPassword;
    console.log(email, password, confirmPassword);
    }
}
