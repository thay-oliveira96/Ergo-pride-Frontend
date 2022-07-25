import { Component, OnInit } from '@angular/core';
import { Empresas } from 'src/app/models/empresas';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { EmpresaService } from 'src/app/services/empresas';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamentos } from 'src/app/models/departamentos';
import { DepartamentoService } from 'src/app/services/departamentos';

@Component({
  selector: 'app-empresas-update',
  templateUrl: './empresas-update.component.html',
  styleUrls: ['./empresas-update.component.css']
})
export class EmpresasUpdateComponent implements OnInit {

  empresas: Empresas = {
    id:                   '',
    nome:                 '',
    cnpj:                 '',
    cnae:                 '',
    cep:                  '',
    endereco:             '',
    numero:               '',
    municipio:            '',
    estado:               '',
    telefone:             '',
    celular:              '',
    email:                '',
    funcionarios:         '',
    departamentos:        '',
    atividadePrincipal:   '',
    observacoes:          ''
  }

  departamento: Departamentos[] = []

  nome: FormControl =                     new FormControl(null, Validators.minLength(3));
  cnpj: FormControl =                     new FormControl(null, Validators.required);
  cnae: FormControl =                     new FormControl(null, Validators.required);
  cep: FormControl =                      new FormControl(null, Validators.required);
  endereco: FormControl =                 new FormControl(null, Validators.required);
  numero: FormControl =                   new FormControl(null, Validators.required);
  municipio: FormControl =                new FormControl(null, Validators.required);
  estado: FormControl =                   new FormControl(null, Validators.required);
  telefone: FormControl =                 new FormControl(null, Validators.required);
  celular: FormControl =                  new FormControl(null, Validators.required);
  email: FormControl =                    new FormControl(null, Validators.email);
  funcionarios: FormControl =             new FormControl(null, Validators.required);
  departamentos: FormControl =            new FormControl(null, Validators.required);
  atividadePrincipal: FormControl =       new FormControl(null, Validators.required);
  observacoes: FormControl =              new FormControl(null, Validators.required);

  constructor(
    private service: EmpresaService,
    private departamentoService: DepartamentoService,
    private toast:    ToastrService,
    private router:          Router,
    private route:   ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.empresas.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    this.findAllDepartamentos();
   }

   findAllDepartamentos(): void { 
    this.departamentoService.findAll().subscribe(resposta => {
      this.departamento = resposta;
    })
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