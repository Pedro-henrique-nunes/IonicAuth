import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [ApiService]
})
export class Tab1Page implements OnInit {
  public pesquisa: string = "";
  public titulo: string = "cadastro";
  public resultado: string = "";
  public lista_artigos: any[] = [];

  constructor(public apiService: ApiService, private navegacao: NavController) { }
    
  carregaPagina(){
    this.apiService.getgNews('pt-br').subscribe(
      (data: any) => {
        this.lista_artigos = data.articles;
        console.log(this.lista_artigos);
      },
      error =>{
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.carregaPagina();
  }
}
