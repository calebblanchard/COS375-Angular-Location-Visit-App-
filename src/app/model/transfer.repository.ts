import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Transfer } from './transfer.model';
import { RestDataSource } from './rest.datasource';

/*
Listing 9-16 makes the corresponding changes to the order repository, adding methods that allow
orders to be modified and deleted.

The order repository defines a loadOrders method that gets the orders from the repository and that
is used to ensure that the request isn’t sent to the RESTful web service until authentication has been
performed.
 */
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
