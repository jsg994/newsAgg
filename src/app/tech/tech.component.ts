import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
  articles: any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getTech().subscribe((data)=> {
      console.log(data, 'data');
      this.articles = data['articles']
    })
  }

}
