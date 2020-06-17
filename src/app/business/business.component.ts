import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  articles: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getBusiness().subscribe((data)=> {
      console.log(data, 'data');
      this.articles = data['articles']
    })
  }

}
