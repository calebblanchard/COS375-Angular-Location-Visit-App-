import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TransferRepository } from '../model/transfer.repository';
import { Transfer } from '../model/transfer.model';

@Component({
  moduleId: module.id,
  templateUrl: 'transfer.component.html',
  styleUrls: ['transfer.component.css']
})
export class TransferComponent {
  transferSent = false;
  transferred = false;

  constructor(public repository: TransferRepository,
              public transfer: Transfer) {}

  submitTransfer(form: NgForm) {
    this.transferred = true;
    if (form.valid) {
      this.repository.saveTransfer(this.transfer).subscribe(transfer => {
        this.transfer.clear();
        this.transferSent = true;
        this.transferred = false;
      });
    }
  }
}
