import { Component } from '@angular/core';
import { Location } from '../model/location.model';
import { LocationRepository } from '../model/location.repository';

/*
This component will be responsible for showing a list of
products, along with buttons required to edit and delete them or to create a new product.

The initial administration feature presented to the user will be a list of products, with the ability to create
a new product and delete or edit an existing one. Listing 9-23 removes the placeholder content from the
product table component and adds the logic required to implement this feature.
 */
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
