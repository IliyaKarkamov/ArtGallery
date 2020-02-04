import {Component, OnInit, ViewChild} from '@angular/core';
import {AccountService} from '../../../../services/account/account.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Account} from '../../../../models/account';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'email', 'actions'];
  dataSource: MatTableDataSource<Account>;

  loadingErrorMessage = '';

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private accountService: AccountService) {
    accountService.getAll()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource<Account>(data.result);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, error => {
        this.loadingErrorMessage = '';

        for (const exception of error.error.exceptions) {
          this.loadingErrorMessage += exception.message;
        }
      });
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
