import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { PasswordValidator } from './shared/password.validator';

//import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb: FormBuilder){}
  registrationForm = this.fb.group({
    //the item on index 0, is alwasy the default value
    //the item on index 1, is the validator rule
    userName:['', [Validators.required, Validators.minLength(4)]],
    password: [''],
    confirmPassword: [''],
    Address: this.fb.group({
      state: [''],
      city: [''],
      postalCode: ['']
    })
  }, {validator: PasswordValidator });


  //When not using form builder....
  // registrationForm = new FormGroup({
  //   userName: new FormControl('Ban-Gatto'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   Address:new FormGroup({
  //     state: new FormControl(''),
  //     city: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // })
  loadApiData(){
    this.registrationForm.patchValue({
      userName:'Kuon',
      password: 'tester',
      confirmPassword: 'tester',
      Address: {
        city:'Montreal',
        state: 'Quebec',
        postalCode: 'H2X 2K9'
      }
    })
    
  }
}
