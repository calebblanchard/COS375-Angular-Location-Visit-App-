import { Component } from '@angular/core';
import { Location } from '../model/location.model';
import { LocationRepository } from '../model/location.repository';

@Component({
  moduleId: module.id,
  templateUrl: 'locationTable.component.html'
})
export class LocationTableComponent {
  constructor(private repository: LocationRepository) { }
  getLocations(): Location[] {
    return this.repository.getLocations();
  }
  deleteLocation(id: number) {
    this.repository.deleteLocation(id);
  }
}
