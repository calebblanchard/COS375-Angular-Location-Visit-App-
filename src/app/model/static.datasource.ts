import { Injectable } from '@angular/core';
import { Location } from './location.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { Transfer } from './transfer.model';

@Injectable()
export class StaticDataSource {

  private Locations: Location[] = [
    new Location(1, 'Location 1', 'Town A', 'County A', 90, 110),
    new Location(2, 'Location 2', 'Town A', 'County A', 80, 120),
    new Location(3, 'Location 3', 'Town A', 'County A', 70, 130),
    new Location(4, 'Location 4', 'Town A', 'County A', 60, 140),
    new Location(5, 'Location 5', 'Town A', 'County A', 50, 150),
    new Location(6, 'Location 6', 'Town B', 'County B', 40, 160),
    new Location(7, 'Location 7', 'Town B', 'County B', 30, 170),
    new Location(8, 'Location 8', 'Town B', 'County B', 20, 180),
    new Location(9, 'Location 9', 'Town B', 'County B', 10, 100),
    new Location(10, 'Location 10', 'Town B', 'County B', 0, 90),
    new Location(11, 'Location 11', 'Town C', 'County C', -10, -80),
    new Location(12, 'Location 12', 'Town C', 'County C', -20, -70),
    new Location(13, 'Location 13', 'Town C', 'County C', -30, -60),
    new Location(14, 'Location 14', 'Town C', 'County C', -40, -50),
    new Location(15, 'Location 15', 'Town C', 'County C', -50, -40),
  ];

  getLocations(): Observable<Location[]> {
    return Observable.from([this.Locations]);
  }

  saveTransfer(transfer: Transfer): Observable<Transfer> {
    console.log(JSON.stringify(transfer));
    return Observable.from([transfer]);
  }
}
