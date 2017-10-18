import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Location } from './location.model';
import { VisitContainer } from './visitContainer.model';
import { Transfer } from './transfer.model';
import 'rxjs/add/operator/map';

const PROTOCOL ='http';
const PORT = 3500;

@Injectable()
export class RestDataSource {
	baseUrl: string;
    
	constructor(private http: Http) {
		this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
	}
	
    getLocations(): Observable<Location[]> {
		return this.sendRequest(RequestMethod.Get, "locations");
	}
    
	saveTransfer(transfer: Transfer): Observable<Transfer> {
		return this.sendRequest(RequestMethod.Post, "transfers", transfer);
	}
	
    private sendRequest(verb: RequestMethod, 
			url: string, body?: Location | Transfer): Observable<Location | Transfer> {
		return this.http.request(new Request({
			method: verb,
			url: this.baseUrl + url,
			body: body
		})).map(response => response.json());
	}
}
