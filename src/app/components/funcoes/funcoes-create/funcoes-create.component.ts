import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Funcoes } from 'src/app/models/funcoes';
import { FuncoeService } from 'src/app/services/funcoes.service';

@Component({
  selector: 'app-funcoes-create',
  templateUrl: './funcoes-create.component.html',
  styleUrls: ['./funcoes-create.component.css']
})
export class FuncoesCreateComponent implements OnInit {


  funcoes: Funcoes = {
    id:         '',
    nome:       ''
  }

  nome: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
    private service: FuncoeService,
    private toast: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  
  create(): void {
    this.service.create(this.funcoes).subscribe(() => {
      this.toast.success('Existe uma função com o mesmo nome', 'cadastro');
      this.router.navigate(['funcoes'])
    }, ex => {
      console.log(ex);
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

