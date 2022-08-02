import { Component, OnInit, ViewChild } from '@angular/core';
import { Segmento } from 'src/app/models/segmento';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SegmentoService } from 'src/app/services/segmento.service';

@Component({
  selector: 'app-segmento-list',
  templateUrl: './segmento-list.component.html',
  styleUrls: ['./segmento-list.component.css']
})
export class SegmentoListComponent implements OnInit {

  ELEMENT_DATA: Segmento[] = []
  
  displayedColumns: string[] = ['id', 'descricao', 'acoes'];
  dataSource = new MatTableDataSource<Segmento>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private service: SegmentoService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Segmento>(resposta);
      this.dataSource.paginator = this.paginator;
    } )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}