import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component';
import { TecnicoCreateComponent } from './components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoUpdateComponent } from './components/tecnico/tecnico-update/tecnico-update.component';
import { TecnicoDeleteComponent } from './components/tecnico/tecnico-delete/tecnico-delete.component';
import { ChamadoListComponent } from './components/chamado/chamado-list/chamado-list.component';
import { ChamadoCreateComponent } from './components/chamado/chamado-create/chamado-create.component';
import { ChamadoUpdateComponent } from './components/chamado/chamado-update/chamado-update.component';
import { ChamadoReadComponent } from './components/chamado/chamado-read/chamado-read.component';
import { EmpresasCreateComponent } from './components/empresas/empresas-create/empresas-create.component';
import { EmpresasListComponent } from './components/empresas/empresas-list/empresas-list.component';
import { EmpresasUpdateComponent } from './components/empresas/empresas-update/empresas-update.component';
import { EmpresasDeleteComponent } from './components/empresas/empresas-delete/empresas-delete.component';
import { EmpresasReadComponent } from './components/empresas/empresas-read/empresas-read.component';
import { DepartamentosListComponent } from './components/departamentos/departamentos-list/departamentos-list.component';
import { DepartamentosCreateComponent } from './components/departamentos/departamentos-create/departamentos-create.component';
import { DepartamentosUpdateComponent } from './components/departamentos/departamentos-update/departamentos-update.component';
import { DepartamentosDeleteComponent } from './components/departamentos/departamentos-delete/departamentos-delete.component';
import { FuncoesCreateComponent } from './components/funcoes/funcoes-create/funcoes-create.component';
import { FuncoesListComponent } from './components/funcoes/funcoes-list/funcoes-list.component';
import { FuncoesUpdateComponent } from './components/funcoes/funcoes-update/funcoes-update.component';
import { FuncoesDeleteComponent } from './components/funcoes/funcoes-delete/funcoes-delete.component';
import { ObjetoListComponent } from './components/objeto/objeto-list/objeto-list.component';
import { ObjetoCreateComponent } from './components/objeto/objeto-create/objeto-create.component';
import { ObjetoUpdateComponent } from './components/objeto/objeto-update/objeto-update.component';
import { ObjetoDeleteComponent } from './components/objeto/objeto-delete/objeto-delete.component';
import { SegmentoListComponent } from './components/segmento/segmento-list/segmento-list.component';
import { SegmentoCreateComponent } from './components/segmento/segmento-create/segmento-create.component';
import { SegmentoUpdateComponent } from './components/segmento/segmento-update/segmento-update.component';
import { SegmentoDeleteComponent } from './components/segmento/segmento-delete/segmento-delete.component';
import { AetCargoListComponent } from './components/aetCargo/aet-cargo-list/aet-cargo-list.component';
import { AetListComponent } from './components/aet/aet-list/aet-list.component';
import { AetCreateComponent } from './components/aet/aet-create/aet-create.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: NavComponent, canActivate: [AuthGuard], children: [
      { path: 'home', component: HomeComponent},

      { path: 'tecnicos',            component: TecnicoListComponent },
      { path: 'tecnicos/create',     component: TecnicoCreateComponent },
      { path: 'tecnicos/update/:id', component: TecnicoUpdateComponent },
      { path: 'tecnicos/delete/:id', component: TecnicoDeleteComponent },

      { path: 'clientes', component: ClienteListComponent},
      { path: 'clientes/create', component: ClienteCreateComponent},
      { path: 'clientes/update/:id', component: ClienteUpdateComponent},
      {path: 'clientes/delete/:id', component: ClienteDeleteComponent},

      {path: 'chamados', component: ChamadoListComponent},
      {path: 'chamados/create', component: ChamadoCreateComponent},
      {path: 'chamados/update/:id', component: ChamadoUpdateComponent},
      {path: 'chamados/read/:id', component: ChamadoReadComponent},

      {path: 'empresas', component: EmpresasListComponent},
      {path: 'empresas/create', component: EmpresasCreateComponent},
      {path: 'empresas/update/:id', component: EmpresasUpdateComponent},
      {path: 'empresas/delete/:id', component: EmpresasDeleteComponent},
      {path: 'empresas/read/:id', component: EmpresasReadComponent},

      {path: 'departamentos', component: DepartamentosListComponent},
      {path: 'departamentos/create', component: DepartamentosCreateComponent},
      {path: 'departamentos/update/:id', component: DepartamentosUpdateComponent},
      {path: 'departamentos/delete/:id', component: DepartamentosDeleteComponent},

      {path: 'funcoes', component: FuncoesListComponent},
      {path: 'funcoes/create', component: FuncoesCreateComponent},
      {path: 'funcoes/update/:id', component: FuncoesUpdateComponent},
      {path: 'funcoes/delete/:id', component: FuncoesDeleteComponent},

      {path: 'objeto', component: ObjetoListComponent},
      {path: 'objeto/create', component: ObjetoCreateComponent},
      {path: 'objeto/update/:id', component: ObjetoUpdateComponent},
      {path: 'objeto/delete/:id', component: ObjetoDeleteComponent},

      {path: 'segmento', component: SegmentoListComponent},
      {path: 'segmento/create', component: SegmentoCreateComponent},
      {path: 'segmento/update/:id', component: SegmentoUpdateComponent},
      {path: 'segmento/delete/:id', component: SegmentoDeleteComponent},

      {path: 'aet', component: AetListComponent},
      {path: 'aet/create', component: AetCreateComponent},
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
