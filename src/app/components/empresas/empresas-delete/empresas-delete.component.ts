import { Component, OnInit } from '@angular/core';
import { Empresas } from 'src/app/models/empresas';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpresaService } from 'src/app/services/empresas.service';



@Component({
  selector: 'app-empresas-delete',
  templateUrl: './empresas-delete.component.html',
  styleUrls: ['./empresas-delete.component.css']
})
export class EmpresasDeleteComponent implements OnInit {

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
    departamentos:        [ ],
    atividadePrincipal:   '',
    observacoes:          ''
  }

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

  delete(): void {
    this.service.delete(this.empresas.id).subscribe(() => {
      this.toast.success('Empresa Deletada com sucesso', 'Delete');
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

}