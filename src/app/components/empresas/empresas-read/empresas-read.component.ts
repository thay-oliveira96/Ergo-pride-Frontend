import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Empresas } from 'src/app/models/empresas';
import { EmpresaService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-empresas-read',
  templateUrl: './empresas-read.component.html',
  styleUrls: ['./empresas-read.component.css']
})
export class EmpresasReadComponent implements OnInit {

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

  constructor(
    private empresaService: EmpresaService,
    private toastService:    ToastrService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.empresas.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    this.empresaService.getDepartamentosId(this.empresas);
  }

  findById(): void {
    this.empresaService.findById(this.empresas.id).subscribe(resposta => {
      this.empresas = resposta;
    }, ex => {
      this.toastService.error(ex.error.error);
    })
  }
}