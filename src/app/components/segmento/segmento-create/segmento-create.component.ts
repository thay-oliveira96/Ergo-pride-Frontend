import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Segmento } from 'src/app/models/segmento';
import { SegmentoService } from 'src/app/services/segmento.service';

@Component({
  selector: 'app-segmento-create',
  templateUrl: './segmento-create.component.html',
  styleUrls: ['./segmento-create.component.css']
})
export class SegmentoCreateComponent implements OnInit {

  segmento: Segmento = {
    id:         '',
    descricao:  ''
  }

  descricao: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
    private service: SegmentoService,
    private toast: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  
  create(): void {
    this.service.create(this.segmento).subscribe(() => {
      this.toast.success('Segmento cadastrado com sucesso', 'cadastro');
      this.router.navigate(['segmento'])
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
    return this.descricao.valid
  }
  
}

