import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RestDataSource } from './rest.datasource';
import 'rxjs/add/operator/map';

/*
Rather than expose the data source directly to the rest of the application, I am going to create a service that
can be used to perform authentication and determine whether the application has been authenticated. I
added a file called auth.service.ts in the SportsStore/src/app/model folder and defined the class shown
in Listing 9-9.

The authenticate method receives the user’s credentials and passes them on to the data source
authenticate method, returning an Observable that will yield true if the authentication process has
succeeded and false otherwise. The authenticated property is a getter-only property that returns true if
the data source has obtained an authentication token. The clear method removes the token from the data
source.
 */
@Injectable()
export class AuthService {

  constructor(private datasource: RestDataSource) {}
  authenticate(username: string, password: string): Observable<boolean> {
    return this.datasource.authenticate(username, password);
  }

  get authenticated(): boolean {
    return this.datasource.auth_token != null;
  }

  clear() {
    this.datasource.auth_token = null;
  }
}
