import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Transfer } from './transfer.model';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class TransferRepository {
  private transfers: Transfer[] = [];
  private loaded = false;

  constructor(private dataSource: RestDataSource) {}

  loadOrders() {
    this.loaded = true;
    this.dataSource.getTransfers()
      .subscribe(transfers => this.transfers = transfers);
  }

  getTransfers(): Transfer[] {
    if (!this.loaded) {
      this.loadOrders();
    }
    return this.transfers;
  }

  saveTransfer(transfer: Transfer): Observable<Transfer> {
    return this.dataSource.saveTransfer(transfer);
  }

  updateTransfer(transfer: Transfer) {
    this.dataSource.updateTransfer(transfer).subscribe(transfer => {
      this.transfers.splice(this.transfers.
      findIndex(t => t.id === transfer.id), 1, transfer);
    });
  }

  deleteTransfer(id: number) {
    this.dataSource.deleteTransfer(id).subscribe(transfer => {
      this.transfers.splice(this.transfers.findIndex(t => id === t.id));
    });
  }
}
