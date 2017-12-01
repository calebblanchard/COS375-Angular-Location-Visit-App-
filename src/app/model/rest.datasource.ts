import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Location } from './location.model';
import { VisitContainer } from './visitContainer.model';
import { Transfer } from './transfer.model';
import 'rxjs/add/operator/map';

const PROTOCOL = 'http';
const PORT = 3500;

/*
The RESTful data source is the class that will do most of the work because it is responsible for sending
the authentication request to the /login URL and including the JWT in later requests. Listing 9-8 adds
authentication to the RestDataSource class and extends the sendRequest method so that it can include the
JWT in requests.

With the authentication system in place, the next step is to extend the data source so that it can send
authenticated requests and to expose those features through the order and product repository classes.
Listing 9-14 adds methods to the data source that include the authentication token.
 */
@Injectable()
export class RestDataSource {
  baseUrl: string;
  auth_token: string;

  constructor(private http: Http) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  authenticate(user: string, pass: string): Observable<boolean> {
    return this.http.request(new Request({
      method: RequestMethod.Post,
      url: this.baseUrl + 'login',
      body: { name: user, password: pass }
    })).map(response => {
      const r = response.json();
      this.auth_token = r.success ? r.token : null;
      return r.success;
    });
  }

  getLocations(): Observable<Location[]> {
    return this.sendRequest(RequestMethod.Get, 'locations');
  }

  saveLocation(location: Location): Observable<Location> {
    return this.sendRequest(RequestMethod.Post, 'locations',
      location, true);
  }

  updateLocation(location): Observable<Location> {
    return this.sendRequest(RequestMethod.Put,
      `locations/${location.id}`, location, true);
  }
  deleteLocation(id: number): Observable<Location> {
    return this.sendRequest(RequestMethod.Delete,
      `locations/${id}`, null, true);
  }
  getTransfers(): Observable<Transfer[]> {
    return this.sendRequest(RequestMethod.Get,
      'transfers', null, true);
  }
  deleteTransfer(id: number): Observable<Transfer> {
    return this.sendRequest(RequestMethod.Delete,
      `transfers/${id}`, null, true);
  }
  updateTransfer(transfer: Transfer): Observable<Transfer> {
    return this.sendRequest(RequestMethod.Put,
      `transfers/${transfer.id}`, transfer, true);
  }

  saveTransfer(transfer: Transfer): Observable<Transfer> {
    return this.sendRequest(RequestMethod.Post, 'transfers', transfer);
  }

  private sendRequest(verb: RequestMethod,
                      url: string, body?: Location | Transfer, auth: boolean = false)
  : Observable<Location | Location[] | Transfer | Transfer[]> {
    const request = new Request({
      method: verb,
      url: this.baseUrl + url,
      body: body
    });
    if (auth && this.auth_token != null) {
      request.headers.set('Authorization', `Bearer<${this.auth_token}>`);
    }
    return this.http.request(request).map(response => response.json());
  }
}
