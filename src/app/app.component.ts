import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shaileshsir';

  loginform = new FormGroup({

    Name : new FormControl('',[Validators.required]),
    Email : new FormControl('',[Validators.required,Validators.email]),
    
    Password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    Cpassword:new FormControl('',[Validators.required,Validators.minLength(6)]),
    Phone :new FormControl('',[Validators.required])   
  });

 

  get Name(){
    return  this.loginform.get("Name");
  }
  get Email(){
    return  this.loginform.get("Email");
  }
  get Password(){
    return  this.loginform.get("Password");
  }
  get Cpassword(){
    return  this.loginform.get("Cpassword");
  }
  get Phone(){
    return  this.loginform.get("Phone");
  }

  onSubmit(){
    console.log('valid?',this.loginform.valid);
    console.log(this.loginform.value);
  }
}
