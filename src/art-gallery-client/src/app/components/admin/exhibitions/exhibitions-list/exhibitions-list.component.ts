import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Exhibition} from '../../../../models/exhibition';
import {ExhibitionsService} from '../../../../services/exhibitions/exhibitions.service';

@Component({
  selector: 'app-exhibitions-list',
  templateUrl: './exhibitions-list.component.html',
  styleUrls: ['./exhibitions-list.component.scss']
})
export class ExhibitionsListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'startDate', 'endDate', 'actions'];
  dataSource: MatTableDataSource<Exhibition>;

  loadingErrorMessage = '';

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private exhibitionsService: ExhibitionsService) {
  }

  ngOnInit() {
    this.exhibitionsService.getAll()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource<Exhibition>(data.result);
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
