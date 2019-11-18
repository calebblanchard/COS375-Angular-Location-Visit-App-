import { Injectable } from '@angular/core';
import { Location } from './location.model';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class LocationRepository {
  private locations: Location[] = [];
  private counties: string[] = [];

  constructor(private dataSource: RestDataSource) {
    dataSource.getLocations().subscribe(data => {
      this.locations = data;
      this.counties = data.map(p => p.county)
        .filter((c, index, array) => array.indexOf(c) === index).sort();
    });
  }

  getLocations(county: string = null): Location[] {
    return this.locations
      .filter(p => county == null || county === p.county);
  }

  getLocation(id: number): Location {
    return this.locations.find(p => p.id === id);
  }

  getCounties(): string[] {
    return this.counties;
  }

  saveLocation(location: Location) {
    if (location.id == null || location.id === 0) {
      this.dataSource.saveLocation(location)
        .subscribe(l => this.locations.push(l));
    } else {
      this.dataSource.updateLocation(location)
        .subscribe(l => {
          this.locations.splice(this.locations.
          findIndex(l => l.id === location.id), 1, location);
        });
    }
  }

  deleteLocation(id: number) {
    this.dataSource.deleteLocation(id).subscribe(l => {
      this.locations.splice(this.locations.
      findIndex(l => l.id === id), 1);
    });
  }
}
