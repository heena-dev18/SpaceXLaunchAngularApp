import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISpacexSummary } from './spacexSummary';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private _url: string = "https://api.spaceXdata.com/v3/launches?limit=100";
  private _urlLaunch: string = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true";
  private _urlLand: string = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true";
  private _urlAll: string = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014";

  constructor(private httpClient: HttpClient) { }

  getSelectedEventDetails(): Observable<ISpacexSummary[]> {
    var selected = this.httpClient.get<ISpacexSummary[]>(this._url);
    return selected;
  }

  getLaunchEventDetails(): Observable<ISpacexSummary[]> {
    var launchResult = this.httpClient.get<ISpacexSummary[]>(this._urlLaunch);
    return launchResult;
  }

  getLandEventDetails(): Observable<ISpacexSummary[]> {
    var landResult = this.httpClient.get<ISpacexSummary[]>(this._urlLand);
    return landResult;
  }

  getAllEventDetails(): Observable<ISpacexSummary[]> {
    var result = this.httpClient.get<ISpacexSummary[]>(this._urlAll);
    return result;
  }
}
