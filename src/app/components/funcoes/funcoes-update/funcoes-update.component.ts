import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcoes } from 'src/app/models/funcoes';
import { FuncoeService } from 'src/app/services/funcoes';

@Component({
  selector: 'app-funcoes-update',
  templateUrl: './funcoes-update.component.html',
  styleUrls: ['./funcoes-update.component.css']
})
export class FuncoesUpdateComponent implements OnInit {

  funcoes: Funcoes = {
    id:         '',
    nome:       ''
  }

  nome: FormControl =  new FormControl(null, Validators.minLength(3));
  
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

  update(): void {
    this.service.update(this.funcoes).subscribe(() => {
      this.toast.success('Funcao atualizado com sucesso', 'Update');
      this.router.navigate(['empresas'])
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
  
  validaCampos(): boolean {
    return this.nome.valid
  }
}