import { Injectable } from '@angular/core';
import { Http, Response } from '../../node_modules/@angular/http';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
    
    private _url: string = "assets/data/appData.json";
    
    constructor(private _http:Http){}
    
    getAppData() {
        return this._http.get(this._url).pipe(map((response:Response) => response.json()));
    }
}