import { Injectable } from '@angular/core';
import { Location } from './location.model';

@Injectable()
export class VisitContainer {
  public visits: Visit[] = [];
  public locCount = 0;

  addVisit(location: Location, quantity: number = 1) {
    const visit = this.visits.find(v => v.location.id === location.id);
    if (visit !== undefined) {
      visit.quantity += quantity;
    } else {
      this.visits.push(new Visit(location, quantity));
    }
    this.recalculate();
  }

  updateQuantity(location: Location, quantity: number) {
    const visit = this.visits.find(v => v.location.id === location.id);
    if (visit !== undefined) {
      visit.quantity = Number(quantity);
    }
    this.recalculate();
  }

  removeVisit(id: number) {
    const index = this.visits.findIndex(v => v.location.id === id);
    this.visits.splice(index, 1);
    this.recalculate();
  }

  clear() {
    this.visits = [];
    this.locCount = 0;
  }

  private recalculate() {
    this.locCount = 0;
    this.visits.forEach(v => this.locCount += v.quantity);
  }
}
export class Visit {
  constructor(public location: Location,
              public quantity: number) {}
  get locTotal() {
    return this.quantity;
  }
}
