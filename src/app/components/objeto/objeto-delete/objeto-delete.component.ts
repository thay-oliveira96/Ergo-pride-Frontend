import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Objeto } from 'src/app/models/objeto';
import { ObjetoService } from 'src/app/services/objeto.service';

@Component({
  selector: 'app-objeto-delete',
  templateUrl: './objeto-delete.component.html',
  styleUrls: ['./objeto-delete.component.css']
})
export class ObjetoDeleteComponent implements OnInit {

  objeto: Objeto = {
    id:         '',
    descricao:       ''
  }

  constructor(
    private service: ObjetoService,
    private toast:    ToastrService,
    private router:          Router,
    private route:   ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.objeto.id = this.route.snapshot.paramMap.get('id');
    this.findById();
   }

  findById(): void {
    this.service.findById(this.objeto.id).subscribe(resposta => {
      this.objeto = resposta;
    })
  }

  delete(): void {
    this.service.delete(this.objeto.id).subscribe(() => {
      this.toast.success('Objeto Deletado com sucesso', 'Delete');
      this.router.navigate(['objeto'])
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