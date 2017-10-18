import { Component } from '@angular/core';
import { VisitContainer } from '../model/visitContainer.model';

@Component({
  selector: 'visit-summary',
  moduleId: module.id,
  templateUrl: 'visitSummary.component.html'
})
export class VisitSummaryComponent {
  constructor(public container: VisitContainer) { }
}
