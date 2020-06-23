import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      Companies List
    </h3>
    <ul class="items">
      <li (click)="OnSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
    `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  departments =[
  {"id": 1, "name": "Google"},
  {"id": 2, "name": "Microsoft"},
  {"id": 3, "name": "FaceBook"},
  {"id": 4, "name": "Goldman Sachs"},
  {"id": 5, "name": "Pinterest"},
]
  public selectedId;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(){
    this.route.paramMap.subscribe((params: ParamMap)=> {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    })
  }
  OnSelect(department){
    //this is an absolut path-->>this.router.navigate(['/departments', department.id])
    //relative path --->
    this.router.navigate([department.id], {relativeTo: this.route});
  }
  isSelected(department){
    return department.id == this.selectedId;
  }

}
