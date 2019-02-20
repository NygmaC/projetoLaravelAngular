import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpEvent } from '@angular/common/http';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class ServicoHttpService {

  public getRegistros: Post[] = [];

  constructor(private http: HttpClient) {
    console.log('cjbzhxvxzhv');
    this.http.get("/api/").subscribe(
      (registros: any[]) => {

          for(let p of registros) {
          
            var reg = new Post(p.nome,
              p.titulo,
              p.subtitulo,p.email,p.mensagem,p.arquivo,p.id,p.ikes);
            this.getRegistros.push(reg);

          }
      });

  }

  setCadastro(registro: Post, arquivo: File) {
    const uploadData = new FormData();
    uploadData.append('nome', registro.nome);
    uploadData.append('email', registro.email);
    uploadData.append('titulo', registro.titulo);
    uploadData.append('subtitulo', registro.subtitulo);
    uploadData.append('mensagem', registro.mensagem);
    uploadData.append('arquivo', arquivo, arquivo.name);
    
    this.http.post('/api/', uploadData, {reportProgress: true, observe: 'events'}).subscribe((event: any) => {
      if(event.type == HttpEventType.Response){
        console.log('retorno');
        console.log(event);
      }
    });

  }


}
