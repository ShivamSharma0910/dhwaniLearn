import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private pendingHTTPRequests$ = new Subject<void>();
  ;
  // private apiurl = "https://run.mocky.io/v3/03e6b9af-41cf-4136-8a62-2e9aa0b47bfd";
   private apiurl = "https://run.mocky.io/v3/bb3fdf7b-e102-47be-8afc-91dfadc542ee";
   constructor(private http: HttpClient) { }


    public cancelPendingRequests() {
      this.pendingHTTPRequests$.next();
    }
    public onCancelPendingRequests() {
      return this.pendingHTTPRequests$.asObservable();
    }


    getData() {
      return this.http.get(this.apiurl);
    }
    getDataforA() {
    return this.http.get(this.apiurl);
    }
    getDataforB() {
    return this.http.get(this.apiurl);
    }
}
