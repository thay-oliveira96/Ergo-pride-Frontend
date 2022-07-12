import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Empresas } from 'src/app/models/empresas';
import { EmpresaService } from 'src/app/services/empresas';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-empresas-create',
  templateUrl: './empresas-create.component.html',
  styleUrls: ['./empresas-create.component.css']
})
export class EmpresasCreateComponent implements OnInit {

  empresas: Empresas = {
    id:         '',
    nome:       '',
    cnpj:        '',
    cep:      '',
    endereco:      '',
    telefone:     '',
    celular: '',
    email: '',
    funcionarios: '',
    departamentos: '',
    observacoes: ''
  }

  nome: FormControl = new FormControl(null, Validators.minLength(3));
  cnpj: FormControl = new FormControl(null, Validators.required);
  cep: FormControl = new FormControl(null, Validators.required);
  endereco: FormControl = new FormControl(null, Validators.required);
  telefone: FormControl = new FormControl(null, Validators.required);
  celular: FormControl = new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.required);
  funcionarios: FormControl = new FormControl(null, Validators.required);
  departamentos: FormControl = new FormControl(null, Validators.required);
  observacoes: FormControl = new FormControl(null, Validators.required);

  constructor(
    private service: EmpresaService,
    private toast: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  
  create(): void {
    this.service.create(this.empresas).subscribe(() => {
      this.toast.success('Empresa cadastrada com sucesso', 'cadastro');
      this.router.navigate(['empresas'])
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
    return this.nome.valid && this.cnpj.valid && this.email.valid
  }
  
}

