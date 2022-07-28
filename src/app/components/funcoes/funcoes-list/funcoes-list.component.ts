import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Funcoes } from 'src/app/models/funcoes';
import { FuncoeService } from 'src/app/services/funcoes.service';


@Component({
  selector: 'app-funcoes-list',
  templateUrl: './funcoes-list.component.html',
  styleUrls: ['./funcoes-list.component.css']
})
export class FuncoesListComponent implements OnInit {

  ELEMENT_DATA: Funcoes[] = []
  
  displayedColumns: string[] = ['id', 'nome', 'acoes'];
  dataSource = new MatTableDataSource<Funcoes>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private service: FuncoeService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Funcoes>(resposta);
      this.dataSource.paginator = this.paginator;
    } )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}