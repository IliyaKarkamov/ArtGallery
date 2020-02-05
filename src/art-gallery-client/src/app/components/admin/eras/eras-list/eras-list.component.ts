import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Style} from '../../../../models/style';
import {StylesService} from '../../../../services/styles/styles.service';

@Component({
  selector: 'app-eras-list',
  templateUrl: './eras-list.component.html',
  styleUrls: ['./eras-list.component.scss']
})
export class ErasListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'active', 'actions'];
  dataSource: MatTableDataSource<Style>;

  loadingErrorMessage = '';

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private stylesService: StylesService) {
  }

  ngOnInit() {
    this.stylesService.getAll()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource<Style>(data.result);
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
