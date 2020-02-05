import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {GalleriesService} from '../../../../services/galleries/galleries.service';
import {Gallery} from '../../../../models/gallery';

@Component({
  selector: 'app-galleries-list',
  templateUrl: './galleries-list.component.html',
  styleUrls: ['./galleries-list.component.scss']
})
export class GalleriesListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'address', 'active', 'actions'];
  dataSource: MatTableDataSource<Gallery>;

  loadingErrorMessage = '';

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private galleriesService: GalleriesService) {
  }

  ngOnInit() {
    this.galleriesService.getAll()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource<Gallery>(data.result);
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
