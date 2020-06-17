import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {
articles: any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getBitcoin().subscribe((data)=> {
      console.log(data, 'data');
      this.articles = data['articles']
    })
  }

}
