import { Component } from '@angular/core';
import { EnrolmentService } from './enrolment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted = false;
  Companies = ['Google', 'Microsft','FaceBook', 'Goldman Sachs', 'Pinterest'];
constructor(private _enrolmentService: EnrolmentService){

}
onSubmit(){
  this.submitted = true;
  this._enrolmentService.enrol(this.UserModel)
  .subcribe(
    data => console.log('Success', data),
    console => console.error('Error occurred!',error)
    )
}
}
