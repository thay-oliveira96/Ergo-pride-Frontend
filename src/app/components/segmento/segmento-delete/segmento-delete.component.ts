import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Segmento } from 'src/app/models/segmento';
import { ObjetoService } from 'src/app/services/objeto.service';
import { SegmentoService } from 'src/app/services/segmento.service';

@Component({
  selector: 'app-segmento-delete',
  templateUrl: './segmento-delete.component.html',
  styleUrls: ['./segmento-delete.component.css']
})
export class SegmentoDeleteComponent implements OnInit {

  segmento: Segmento = {
    id:         '',
    descricao:  ''
  }

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

  delete(): void {
    this.service.delete(this.segmento.id).subscribe(() => {
      this.toast.success('Segmento Deletado com sucesso', 'Delete');
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

}