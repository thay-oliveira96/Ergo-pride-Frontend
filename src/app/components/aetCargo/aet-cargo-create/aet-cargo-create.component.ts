import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AetCargos } from 'src/app/models/aetCargo';
import { Funcoes } from 'src/app/models/funcoes';
import { Segmento } from 'src/app/models/segmento';
import { AetCargoService } from 'src/app/services/aetCargo.service';
import { FuncoeService } from 'src/app/services/funcoes.service';
import { SegmentoService } from 'src/app/services/segmento.service';

@Component({
  selector: 'app-aet-cargo-create',
  templateUrl: './aet-cargo-create.component.html',
  styleUrls: ['./aet-cargo-create.component.css']
})
export class AetCargoCreateComponent implements OnInit {

  aetCargos: AetCargos = {
    id:                   '',
    cod:                  '',
    cargo:                '',
    fatoresRisco:         '',
    grauRisco:            '',
    segCorpoPrinc:        '',
   // demSegm:              '',
    diagnosticoGlobal:    '',
    recomendacoes:        '',
  }

  funcoes: Funcoes[] = [];
  SegmCorpo: Segmento[] = [];

  //formularios
  cod: FormControl = new FormControl(null, Validators.minLength(3));
  cargo: FormControl = new FormControl(null, Validators.required);
  fatoresRisco: FormControl = new FormControl(null, Validators.email);
  grauRisco: FormControl = new FormControl(null, Validators.minLength(3));
  SegCorpoPrinc: FormControl = new FormControl(null, Validators.minLength(3));
 // demSegm: FormControl = new FormControl(null, Validators.minLength(3));
  diagnosticoGlobal: FormControl = new FormControl(null, Validators.minLength(3));
  recomendacoes: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
    private service: AetCargoService,
    private funcoeService: FuncoeService,
    private segCorpoService: SegmentoService,
    private toast: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.findAllFuncoes();
    this.findAllSegCorpo();
  }

  
  create(): void {
    this.service.create(this.aetCargos).subscribe(() => {
      this.toast.success('Existe uma função com o mesmo nome', 'cadastro');
      this.router.navigate(['aetCargos'])
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
  isLinear = false;

  findAllFuncoes(): void { 
    this.funcoeService.findAll().subscribe(resposta => {
     this.funcoes = resposta;
    })
  }

  findAllSegCorpo(): void { 
    this.segCorpoService.findAll().subscribe(resposta => {
     this.SegmCorpo = resposta;
    })
  }

  validaCampos(): boolean {
    return this.cod.valid && this.cargo.valid && this.fatoresRisco.valid && this.SegCorpoPrinc.valid
  }
}