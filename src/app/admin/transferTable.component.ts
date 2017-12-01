import { Component } from '@angular/core';
import { Transfer } from '../model/transfer.model';
import { TransferRepository } from '../model/transfer.repository';

/*
To create the component that will be responsible for managing customer orders, I added a file called
orderTable.component.ts to the SportsStore/src/app/admin folder and added the code shown in Listing 9-19.

The order management feature is nice and simple. It requires a table that lists the set of orders, along with
buttons that will set the shipped property to true or delete an order entirely. Listing 9-27 replaces the
placeholder content in the component with the logic required to support these operations.

In addition to providing methods for marking orders as shipped and deleting orders, the component
defines a getOrders method that allows shipped orders to be included or excluded based on the value of a
property called includeShipped. This property is used in the template, which I created by adding a file called
orderTable.component.html to the SportsStore/src/app/admin folder with the markup shown in Listing 9-28.
 */
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
