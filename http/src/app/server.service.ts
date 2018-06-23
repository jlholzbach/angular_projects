import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import  "rxjs/Rx";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ServerService {

  constructor(private http:Http) {}

  getAppName() {
    return this.http.get('https://angular-http-d0582.firebaseio.com/appName.json')
    .map(
      (response: Response) => {
        return response.json();
      }
    );
  }

  getServers() {
    //const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.get('https://angular-http-d0582.firebaseio.com/data.json')
    .map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    )
    .catch(
      (error: Response) => {
        console.log(error);
        return Observable.throw(error);
      }
    );
  }

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    //return this.http.post('https://angular-http-d0582.firebaseio.com/data.json', servers, {headers: headers});
    return this.http.put('https://angular-http-d0582.firebaseio.com/data.json', servers, {headers: headers});
  }

}
