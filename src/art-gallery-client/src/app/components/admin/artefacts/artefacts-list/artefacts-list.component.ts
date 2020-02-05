import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ArtefactsService} from '../../../../services/artefacts/artefacts.service';
import {Artefact} from '../../../../models/artefact';

@Component({
  selector: 'app-artefacts-list',
  templateUrl: './artefacts-list.component.html',
  styleUrls: ['./artefacts-list.component.scss']
})
export class ArtefactsListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'createdAt', 'active', 'actions'];
  dataSource: MatTableDataSource<Artefact>;

  loadingErrorMessage = '';

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private artefactsService: ArtefactsService) {
  }

  ngOnInit() {
    this.artefactsService.getAll()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource<Artefact>(data.result);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, error => {
        this.loadingErrorMessage = '';

        for (const exception of error.error.exceptions) {
          this.loadingErrorMessage += exception.message;
        }
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
