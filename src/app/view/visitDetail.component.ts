import { Component } from '@angular/core';
import { VisitContainer } from '../model/visitContainer.model';

@Component({
  moduleId: module.id,
  templateUrl: 'visitDetail.component.html'
})
export class VisitDetailComponent {
  constructor(public container: VisitContainer) { }
}
