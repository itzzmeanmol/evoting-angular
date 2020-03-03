import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voter } from './voter.model';
import { Candidate } from './candidate.model';
import { Session } from 'protractor';



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
    saveCandidate(candidate:Candidate):Observable<Candidate>{
        return this.http.post<Candidate>(this.baseUrl + "candidate", candidate);//candidate from submit button
    }
    getVoters():Observable<Voter[]>{
        return this.http.get<Voter[]>(this.baseUrl + "voterloginpage/all");
    }
    
    getCandidates():Observable<Candidate[]>{
        return this.http.get<Candidate[]>(this.baseUrl + "candidateloginpage/all");
    }

}