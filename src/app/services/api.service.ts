import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private chave = '78ea043bf70829546b96040440d6582d';
  private caminho = 'https://gnews.io/api/v4';

  constructor(private http: HttpClient) { }

  public getgNews(lang='pt-br'){
    const endpoint = '/search?q=example&apikey=';
    const url = `${this.caminho}${endpoint}&lang=${lang}&apikey=${this.chave}`;
    console.log(url)
    return this.http.get(url);
  }
}
