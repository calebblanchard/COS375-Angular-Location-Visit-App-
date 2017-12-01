import { Injectable } from '@angular/core';
import { VisitContainer } from './visitContainer.model';

@Injectable()
export class Transfer {
  public id: number;
  public name: string;
  public cellPhoneNum: string;
  public shipped = false;

  constructor(public container: VisitContainer) { }

  clear() {
    this.id = null;
    this.name = null;
    this.cellPhoneNum = null;
    this.shipped = false;
    this.container.clear();
  }
}
