import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AetEmpresas } from 'src/app/models/aetEmpresas';
import { AetEmpresaService } from 'src/app/services/aetEmpresa.service';


@Component({
  selector: 'app-aet-list',
  templateUrl: './aet-list.component.html',
  styleUrls: ['./aet-list.component.css']
})
export class AetListComponent implements OnInit {

  ELEMENT_DATA: AetEmpresas[] = []
  
  displayedColumns: string[] = ['id', 'cod', 'empresa', 'status', 'acoes'];
  dataSource = new MatTableDataSource<AetEmpresas>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private service: AetEmpresaService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<AetEmpresas>(resposta);
      this.dataSource.paginator = this.paginator;
    } )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}