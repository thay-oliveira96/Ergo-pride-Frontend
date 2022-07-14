import { Component, OnInit } from '@angular/core';
import { Empresas } from 'src/app/models/empresas';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Funcoes } from 'src/app/models/funcoes';
import { FuncoeService } from 'src/app/services/funcoes';


@Component({
  selector: 'app-funcoes-delete',
  templateUrl: './funcoes-delete.component.html',
  styleUrls: ['./funcoes-delete.component.css']
})
export class FuncoesDeleteComponent implements OnInit {

  funcoes: Funcoes = {
    id:         '',
    nome:       ''
  }

  constructor(
    private service: FuncoeService,
    private toast:    ToastrService,
    private router:          Router,
    private route:   ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.funcoes.id = this.route.snapshot.paramMap.get('id');
    this.findById();
   }

  findById(): void {
    this.service.findById(this.funcoes.id).subscribe(resposta => {
      this.funcoes = resposta;
    })
  }

  delete(): void {
    this.service.delete(this.funcoes.id).subscribe(() => {
      this.toast.success('Função Deletada com sucesso', 'Delete');
      this.router.navigate(['departamentos'])
    }, ex => {
      if(ex.error.errors) {
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    })
  }

}