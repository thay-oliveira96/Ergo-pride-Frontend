import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Objeto } from 'src/app/models/objeto';
import { ObjetoService } from 'src/app/services/objeto.service';

@Component({
  selector: 'app-objeto-create',
  templateUrl: './objeto-create.component.html',
  styleUrls: ['./objeto-create.component.css']
})
export class ObjetoCreateComponent implements OnInit {

  objeto: Objeto = {
    id:         '',
    descricao:  ''
  }

  nome: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
    private service: ObjetoService,
    private toast: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  
  create(): void {
    this.service.create(this.objeto).subscribe(() => {
      this.toast.success('Objeto cadastrado com sucesso', 'cadastro');
      this.router.navigate(['objeto'])
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

