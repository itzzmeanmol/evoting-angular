import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voter } from './voter.model';
const PROTOCOL="http";
const PORT=7070;

@Injectable()
export class RestDataSource{
    baseUrl: string;

    constructor(private http: HttpClient){
        this.baseUrl=`${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    
    saveVoter(voter:Voter):Observable<Voter>{
        return this.http.post<Voter>(this.baseUrl + "voter", voter);//voter from submit button
    }
}