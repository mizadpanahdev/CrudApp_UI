import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  constructor(private http: HttpClient) { }
  list:any[]=[];
  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/v1/student').subscribe((res:any)=> this.list=res);
  }
save(){this.http.post("http://localhost:3000/api/v1/student",{
  "first_name": "Mandana",
    "last_name": "leytani",
    "email": "mandana_leytani@gmail.com",
    "gender": "Genderfluid",
    "date_of_birth": "2021-09-04T19:30:00.000Z",
    "country_of_birth": "Iran"
}).subscribe(res=>console.log(res));
}
}
