import { Component } from '@angular/core';
import { Post } from './post';
import { MatDialog } from '@angular/material';
import { PostDialogComponent } from './post-dialog/post-dialog.component';
import { ServicoHttpService } from './servico-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'projetoangular';
  private posts: Post[];


  constructor (public dialog: MatDialog, public servicohttp: ServicoHttpService){}


  ngOnInit() {
    console.log('rodou');
    this.posts = this.servicohttp.getRegistros;
  }

  openModal() {
    const dialogRef = this.dialog.open(PostDialogComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(
      (result) => {
        if(result) {
          console.log(result);
         this.servicohttp.setCadastro(result.post, result.arquivo);
        }else{
          console.log('hdchdvhdvb');
        }
      }
    );
  }
}
