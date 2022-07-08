import { Component, OnInit } from '@angular/core';
import { Empresas } from 'src/app/models/empresas';
import { FormControl, Validators } from '@angular/forms';
import { EmpresaService } from 'src/app/services/empresas';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-empresas-update',
  templateUrl: './empresas-update.component.html',
  styleUrls: ['./empresas-update.component.css']
})
export class EmpresasUpdateComponent implements OnInit {

  empresas: Empresas = {
    id:         '',
    nome:       '',
    cnpj:        '',
    cep:      '',
    endereco:      '',
    telefone: '',
    email: '',
    funcionarios: '',
    departamentos: ''
  }

  nome: FormControl =  new FormControl(null, Validators.minLength(3));
  cnpj: FormControl =       new FormControl(null, Validators.required);
  cep: FormControl =       new FormControl(null, Validators.required);
  endereco: FormControl =       new FormControl(null, Validators.required);
  telefone: FormControl =       new FormControl(null, Validators.required);
  email: FormControl =        new FormControl(null, Validators.email);
  funcionarios: FormControl =       new FormControl(null, Validators.required);
  departamentos: FormControl =       new FormControl(null, Validators.required);

  constructor(
    private service: EmpresaService,
    private toast:    ToastrService,
    private router:          Router,
    private route:   ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.empresas.id = this.route.snapshot.paramMap.get('id');
    this.findById();
   }

  findById(): void {
    this.service.findById(this.empresas.id).subscribe(resposta => {
      this.empresas = resposta;
    })
  }

  update(): void {
    this.service.update(this.empresas).subscribe(() => {
      this.toast.success('Empresa atualizada com sucesso', 'Update');
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
    return this.nome.valid && this.cnpj.valid
  }
}