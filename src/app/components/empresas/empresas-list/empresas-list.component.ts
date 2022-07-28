import { Component, OnInit, ViewChild } from '@angular/core';
import { Empresas } from 'src/app/models/empresas';
import { EmpresaService } from 'src/app/services/empresas.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-empresas-list',
  templateUrl: './empresas-list.component.html',
  styleUrls: ['./empresas-list.component.css']
})
export class EmpresasListComponent implements OnInit {


  ELEMENT_DATA: Empresas[] = []
  
  displayedColumns: string[] = ['id', 'nome', 'cnpj', 'telefone','email', 'acoes'];
  dataSource = new MatTableDataSource<Empresas>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private service: EmpresaService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Empresas>(resposta);
      this.dataSource.paginator = this.paginator;
    } )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}