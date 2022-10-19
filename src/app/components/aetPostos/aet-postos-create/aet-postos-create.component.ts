import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AetPostos } from 'src/app/models/aetPostos';
import { Funcoes } from 'src/app/models/funcoes';
import { Segmento } from 'src/app/models/segmento';
import { AetPostoService } from 'src/app/services/aetPosto.service';
import { FuncoeService } from 'src/app/services/funcoes.service';
import { SegmentoService } from 'src/app/services/segmento.service';

@Component({
  selector: 'app-aet-postos-create',
  templateUrl: './aet-postos-create.component.html',
  styleUrls: ['./aet-postos-create.component.css']
})
export class AetPostosCreateComponent implements OnInit {

  aetPostos: AetPostos = {
    cod:                  '',
    cargo:                '',
    fatoresRisco:         '',
    grauRisco:            '',
    segCorpoPrinc:        '',
    demSegm:              '',
    diagnosticoGlobal:    '',
    recomendacoes:        '',
    nomeCargo:            '',
    nomeSegCorpoPrinc:    '',
    nomeDemSegm:          ''
  }

  funcoes: Funcoes[] = [];
  SegmCorpo: Segmento[] = [];


  //formularios
  cod:               FormControl = new FormControl(null, [Validators.required]);
  cargo:             FormControl = new FormControl(null, [Validators.required]);
  fatoresRisco:      FormControl = new FormControl(null, [Validators.required]);
  grauRisco:         FormControl = new FormControl(null, [Validators.required]);
  segCorpoPrinc:     FormControl = new FormControl(null, [Validators.required]);
  demSegm:           FormControl = new FormControl(null, [Validators.required]);
  diagnosticoGlobal: FormControl = new FormControl(null, [Validators.required]);
  recomendacoes:     FormControl = new FormControl(null, [Validators.required]);

  constructor(
    private service: AetPostoService,
    private funcoeService: FuncoeService,
    private segCorpoService: SegmentoService,
    private toast: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.findAllFuncoes();
    this.findAllSegCorpo();
  }

  
  create(): void {
    this.service.create(this.aetPostos).subscribe(() => {
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
    return this.cod.valid && this.cargo.valid && this.fatoresRisco.valid && this.fatoresRisco.valid &&
    this.grauRisco.valid && this.segCorpoPrinc.valid && this.demSegm.valid && this.diagnosticoGlobal.valid &&
    this.recomendacoes.valid   
  }
}