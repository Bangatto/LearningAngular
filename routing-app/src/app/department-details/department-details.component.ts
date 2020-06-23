import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, ParamMap} from '@angular/router'

@Component({
  selector: 'app-department-details',
  template: `
    <h3>
      You Selected department with id = {{departmentId}}
    </h3>
    <p>
      <button (click)="showOverview()">OverView</button>
      <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>

    <p>
      <button (click)="GoPrevious()">Previous</button>
      <button (click)="GoNext()">Next</button>
    </p>

    <div>
      <button (click)="goToDepartments()">Back</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(){
  //Commented out is snapshot approach....
   // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap)=> {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    })
  }
  GoPrevious(){
    let previousId = this.departmentId - 1;
    this.router.navigate(['departments', previousId]);
  }
  GoNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(['departments', nextId]);
  }
  goToDepartments(){
    let selectedId = this.departmentId ? this.departmentId: null;
    //this is relative path....
    this.router.navigate(['../', {id:selectedId}], {relativeTo: this.route});
  }
  showOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route});
  }
  showContact(){
    this.router.navigate(['contact'], {relativeTo: this.route});
  }
}
