import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  id: number;

  ngOnInit() {
    //this.id = +this.route.snapshot.paramMap.get('id'); // + est fait pour modifier le type en number (Number)
    this.route.paramMap.subscribe( params => {
      this.id = +params.get('id');
    });
  }

}
