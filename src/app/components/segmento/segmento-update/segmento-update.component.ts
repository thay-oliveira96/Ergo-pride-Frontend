import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Segmento } from 'src/app/models/segmento';
import { SegmentoService } from 'src/app/services/segmento.service';

@Component({
  selector: 'app-segmento-update',
  templateUrl: './segmento-update.component.html',
  styleUrls: ['./segmento-update.component.css']
})
export class SegmentoUpdateComponent implements OnInit {

  segmento: Segmento = {
    id:         '',
    descricao:       ''
  }

  descricao: FormControl =  new FormControl(null, Validators.minLength(3));
  
  constructor(
    private service: SegmentoService,
    private toast:    ToastrService,
    private router:          Router,
    private route:   ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.segmento.id = this.route.snapshot.paramMap.get('id');
    this.findById();
   }

  findById(): void {
    this.service.findById(this.segmento.id).subscribe(resposta => {
      this.segmento = resposta;
    })
  }

  update(): void {
    this.service.update(this.segmento).subscribe(() => {
      this.toast.success('Segmento atualizado com sucesso', 'Update');
      this.router.navigate(['segmento'])
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
    return this.descricao.valid
  }
}