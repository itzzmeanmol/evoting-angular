import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voter } from './voter.model';
import { Candidate } from './candidate.model';
import { Session } from 'protractor';
import { Tck } from './tck.model';
import { Ess } from './ess.model';



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

    saveFlag(voter: Voter): Observable<Voter>{
        const baseUrl=this.baseUrl+"updateflag";
       return this.http.post<Voter>(baseUrl,voter);
    }
    deleteVoter(voter: Voter): Observable<Voter>{
        return this.http.post<Voter>(this.baseUrl+"deletevoter",voter);
    }

    addVote(candidate: Candidate):Observable<Candidate>{
        return this.http.post<Candidate>(this.baseUrl+"addvote", candidate);
    }

    castVote(voter: Voter):Observable<Voter>{
        return this.http.post<Voter>(this.baseUrl+"castvote",voter);
    }

    saveTck(tck: Tck):Observable<Tck>{
        console.log(tck);
        return this.http.post<Tck>(this.baseUrl+"savetck",tck);
    }

    getTck():Observable<Tck[]>{
        return this.http.get<Tck[]>(this.baseUrl+"gettck");
    }

    saveEssFlag(ess: Ess):Observable<Ess>{
        return this.http.post<Ess>(this.baseUrl+"saveess", ess);
    }

    getEssFlag():Observable<Ess[]>{
        return this.http.get<Ess[]>(this.baseUrl+"getess");
    }
}