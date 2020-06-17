import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = '5423ed5cc00142d999923967c939e79c'
 constructor(private httpClient: HttpClient) { }

 public getNews() {
   return this.httpClient.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5423ed5cc00142d999923967c939e79c')
 }

 public getSports(){
   return this.httpClient.get('http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=5423ed5cc00142d999923967c939e79c')
 }

 public getBitcoin(){
   return this.httpClient.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=5423ed5cc00142d999923967c939e79c')
 }

 public getBusiness() {
   return this.httpClient.get('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5423ed5cc00142d999923967c939e79c')
 }

 public getTech(){
   return this.httpClient.get('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5423ed5cc00142d999923967c939e79c')
 }


 
}
