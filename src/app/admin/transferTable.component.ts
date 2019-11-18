import { Component } from '@angular/core';
import { Transfer } from '../model/transfer.model';
import { TransferRepository } from '../model/transfer.repository';

@Component({
  moduleId: module.id,
  templateUrl: 'transferTable.component.html'
})
export class TransferTableComponent {
  includeShipped = false;

  constructor(private repository: TransferRepository) {}

  getTransfers(): Transfer[] {
    return this.repository.getTransfers()
      .filter(t => this.includeShipped || !t.shipped);
  }

  markShipped(transfer: Transfer) {
    transfer.shipped = true;
    this.repository.updateTransfer(transfer);
  }

  delete(id: number) {
    this.repository.deleteTransfer(id);
  }
}
