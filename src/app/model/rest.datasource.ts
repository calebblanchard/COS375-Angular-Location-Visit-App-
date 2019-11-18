import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Location } from './location.model';
import { VisitContainer } from './visitContainer.model';
import { Transfer } from './transfer.model';
import 'rxjs/add/operator/map';

const PROTOCOL = 'http';
const PORT = 3500;

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
