import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  articles: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getSports().subscribe((data)=> {
      console.log(data, 'data');
      this.articles = data['articles']
    })
  }

}
