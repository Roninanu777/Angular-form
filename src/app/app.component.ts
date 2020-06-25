import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb: FormBuilder){}
  
  userprofileForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: ['', Validators.required],
    userName: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required,Validators.minLength(8)]],
    dob: ['', Validators.required],
    country: ['', Validators.required]
  });

  get userName(){
    return this.userprofileForm.get('userName');
  }

  get password(){
    return this.userprofileForm.get('password');
  }

  get firstName(){
    return this.userprofileForm.get('firstName');
  }

  get lastName(){
    return this.userprofileForm.get('lastName');
  }

  get dob(){
    return this.userprofileForm.get('dob');
  }

  get country(){
    return this.userprofileForm.get('country');
  }

  onSubmit(){
    console.warn(this.userprofileForm.value);
  }

}
