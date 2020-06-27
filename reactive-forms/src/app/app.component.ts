import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registrationForm = new FormGroup({
    userName: new FormControl('Ban-Gatto'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    Address:new FormGroup({
      state: new FormControl(''),
      city: new FormControl(''),
      postalCode: new FormControl('')
    })
  })

  loadApiData(){
    this.registrationForm.setValue({
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
