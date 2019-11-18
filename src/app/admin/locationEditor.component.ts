import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Location } from '../model/location.model';
import { LocationRepository } from '../model/location.repository';

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
