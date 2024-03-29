import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Para trabalhar com formulários no Angular 12
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Para realizar requisições HTTP
import { HttpClientModule } from '@angular/common/http';

// Imports para componentes do Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';

//Componentes do projeto
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component';
import { LoginComponent } from './components/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { TecnicoCreateComponent } from './components/tecnico/tecnico-create/tecnico-create.component';
import { NgxMaskModule } from 'ngx-mask';
import { TecnicoUpdateComponent } from './components/tecnico/tecnico-update/tecnico-update.component';
import { TecnicoDeleteComponent } from './components/tecnico/tecnico-delete/tecnico-delete.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ChamadoCreateComponent } from './components/chamado/chamado-create/chamado-create.component';
import { ChamadoListComponent } from './components/chamado/chamado-list/chamado-list.component';
import { ChamadoUpdateComponent } from './components/chamado/chamado-update/chamado-update.component';
import { ChamadoReadComponent } from './components/chamado/chamado-read/chamado-read.component';
import { EmpresasCreateComponent } from './components/empresas/empresas-create/empresas-create.component';
import { EmpresasDeleteComponent } from './components/empresas/empresas-delete/empresas-delete.component';
import { EmpresasUpdateComponent } from './components/empresas/empresas-update/empresas-update.component';
import { EmpresasListComponent } from './components/empresas/empresas-list/empresas-list.component';
import { EmpresasReadComponent } from './components/empresas/empresas-read/empresas-read.component';
import { DepartamentosListComponent } from './components/departamentos/departamentos-list/departamentos-list.component';
import { DepartamentosCreateComponent } from './components/departamentos/departamentos-create/departamentos-create.component';
import { DepartamentosUpdateComponent } from './components/departamentos/departamentos-update/departamentos-update.component';
import { DepartamentosDeleteComponent } from './components/departamentos/departamentos-delete/departamentos-delete.component';
import { FuncoesListComponent } from './components/funcoes/funcoes-list/funcoes-list.component';
import { FuncoesCreateComponent } from './components/funcoes/funcoes-create/funcoes-create.component';
import { FuncoesUpdateComponent } from './components/funcoes/funcoes-update/funcoes-update.component';
import { FuncoesDeleteComponent } from './components/funcoes/funcoes-delete/funcoes-delete.component';
import { AetListComponent } from './components/aet/aet-list/aet-list.component';
import { ObjetoListComponent } from './components/objeto/objeto-list/objeto-list.component';
import { ObjetoCreateComponent } from './components/objeto/objeto-create/objeto-create.component';
import { ObjetoUpdateComponent } from './components/objeto/objeto-update/objeto-update.component';
import { ObjetoDeleteComponent } from './components/objeto/objeto-delete/objeto-delete.component';
import { AetCreateComponent } from './components/aet/aet-create/aet-create.component';
import { SegmentoListComponent } from './components/segmento/segmento-list/segmento-list.component';
import { SegmentoCreateComponent } from './components/segmento/segmento-create/segmento-create.component';
import { SegmentoUpdateComponent } from './components/segmento/segmento-update/segmento-update.component';
import { SegmentoDeleteComponent } from './components/segmento/segmento-delete/segmento-delete.component';
import { AetCargoListComponent } from './components/aetCargo/aet-cargo-list/aet-cargo-list.component';
import { AetCargoCreateComponent } from './components/aetCargo/aet-cargo-create/aet-cargo-create.component';
import { AetCargoUpdateComponent } from './components/aetCargo/aet-cargo-update/aet-cargo-update.component';
import { AetCargoDeleteComponent } from './components/aetCargo/aet-cargo-delete/aet-cargo-delete.component';
import { AetPostosCreateComponent } from './components/aetPostos/aet-postos-create/aet-postos-create.component';
import { AetPostosUpdateComponent } from './components/aetPostos/aet-postos-update/aet-postos-update.component';
import { AetPostosListComponent } from './components/aetPostos/aet-postos-list/aet-postos-list.component';
import { AetPostosDeleteComponent } from './components/aetPostos/aet-postos-delete/aet-postos-delete.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    TecnicoListComponent,
    LoginComponent,
    TecnicoCreateComponent,
    TecnicoUpdateComponent,
    TecnicoDeleteComponent,
    ClienteCreateComponent,
    ClienteDeleteComponent,
    ClienteListComponent,
    ClienteUpdateComponent,
    ChamadoCreateComponent,
    ChamadoListComponent,
    ChamadoUpdateComponent,
    ChamadoReadComponent,
    EmpresasCreateComponent,
    EmpresasDeleteComponent,
    EmpresasUpdateComponent,
    EmpresasListComponent,
    EmpresasReadComponent,
    DepartamentosListComponent,
    DepartamentosCreateComponent,
    DepartamentosUpdateComponent,
    DepartamentosDeleteComponent,
    FuncoesListComponent,
    FuncoesCreateComponent,
    FuncoesUpdateComponent,
    FuncoesDeleteComponent,
    AetListComponent,
    ObjetoListComponent,
    ObjetoCreateComponent,
    ObjetoUpdateComponent,
    ObjetoDeleteComponent,
    AetCreateComponent,
    SegmentoListComponent,
    SegmentoCreateComponent,
    SegmentoUpdateComponent,
    SegmentoDeleteComponent,
    AetCargoListComponent,
    AetCargoCreateComponent,
    AetCargoUpdateComponent,
    AetCargoDeleteComponent,
    AetPostosCreateComponent,
    AetPostosUpdateComponent,
    AetPostosListComponent,
    AetPostosDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Requisições http
    HttpClientModule,
    // Angular Material
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatStepperModule,
    FormsModule,
    MatCardModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    }),
    NgxMaskModule.forRoot()
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
