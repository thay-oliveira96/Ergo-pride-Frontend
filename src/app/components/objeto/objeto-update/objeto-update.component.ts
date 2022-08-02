import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Objeto } from 'src/app/models/objeto';
import { ObjetoService } from 'src/app/services/objeto.service';

@Component({
  selector: 'app-objeto-update',
  templateUrl: './objeto-update.component.html',
  styleUrls: ['./objeto-update.component.css']
})
export class ObjetoUpdateComponent implements OnInit {

  objeto: Objeto = {
    id:         '',
    descricao:       ''
  }

  descricao: FormControl =  new FormControl(null, Validators.minLength(3));
  
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

  update(): void {
    this.service.update(this.objeto).subscribe(() => {
      this.toast.success('Objeto atualizado com sucesso', 'Update');
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
  
  validaCampos(): boolean {
    return this.descricao.valid
  }
}