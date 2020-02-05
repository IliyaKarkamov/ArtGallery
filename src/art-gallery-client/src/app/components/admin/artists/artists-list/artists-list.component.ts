import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Artist} from '../../../../models/artist';
import {ArtistsService} from '../../../../services/artists/artists.service';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.scss']
})
export class ArtistsListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'alias', 'active', 'actions'];
  dataSource: MatTableDataSource<Artist>;

  loadingErrorMessage = '';

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private artistsService: ArtistsService) {
  }

  ngOnInit() {
    this.artistsService.getAll()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource<Artist>(data.result);
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
