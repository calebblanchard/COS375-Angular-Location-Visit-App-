import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Location } from '../model/location.model';
import { LocationRepository } from '../model/location.repository';

/*
I added a file called productEditor.component.ts in the SportsStore/src/app/admin folder and used
it to define the component shown in Listing 9-18, which will be used to allow the user to enter the details
required to create or edit a component.

Components can receive information about the current routing URL and adapt their behavior accordingly.
The editor component needs to use this feature to differentiate between requests to create a new component
and edit an existing one. Listing 9-25 adds the functionality to the editor component required to create or
edit products.
 */
@Component({
  moduleId: module.id,
  templateUrl: 'locationEditor.component.html'
})
export class LocationEditorComponent {
  editing = false;
  location: Location = new Location();
  constructor(private repository: LocationRepository,
              private router: Router,
              activeRoute: ActivatedRoute) {
    this.editing = activeRoute.snapshot.params['mode'] === 'edit';
    if (this.editing) {
      Object.assign(this.location,
        repository.getLocation(activeRoute.snapshot.params['id']));
    }
  }

  save(form: NgForm) {
    this.repository.saveLocation(this.location);
    this.router.navigateByUrl('/admin/main/locations');
  }
}
