import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    route.params.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

  public goToDjango() {
    this.router.navigate(['django']);
  }

}
