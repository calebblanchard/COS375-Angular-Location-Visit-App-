import { Injectable } from '@angular/core';
import { VisitContainer } from './visitContainer.model';

@Injectable()
export class Transfer {
  public id: number;
  public name: string;
  public cellPhoneNum: string;
  public transferred = false;

  constructor(public container: VisitContainer) { }

  clear() {
    this.id = null;
    this.name = null;
    this.cellPhoneNum = null;
    this.transferred = false;
    this.container.clear();
  }
}
