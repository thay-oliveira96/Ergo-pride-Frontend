import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Objeto } from 'src/app/models/objeto';
import { ObjetoService } from 'src/app/services/objeto.service';

@Component({
  selector: 'app-objeto-list',
  templateUrl: './objeto-list.component.html',
  styleUrls: ['./objeto-list.component.css']
})
export class ObjetoListComponent implements OnInit {

  ELEMENT_DATA: Objeto[] = []
  
  displayedColumns: string[] = ['id', 'descricao', 'acoes'];
  dataSource = new MatTableDataSource<Objeto>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private service: ObjetoService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Objeto>(resposta);
      this.dataSource.paginator = this.paginator;
    } )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}