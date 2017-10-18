import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Transfer } from './transfer.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class TransferRepository {
  private transfers: Transfer[] = [];

  constructor(private dataSource: StaticDataSource) {}

  getTransfers(): Transfer[] {
    return this.transfers;
  }
  saveTransfer(transfer: Transfer): Observable<Transfer> {
    return this.dataSource.saveTransfer(transfer);
  }
}
