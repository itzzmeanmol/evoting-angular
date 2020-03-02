import { Injectable } from "@angular/core";
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';
import { Candidate } from './candidate.model';


@Injectable()
export class CandidateRepository{
    private candidates: Candidate[]=[];
    constructor(private dataSource:RestDataSource){}

    getCandidates(): Candidate[]{
        return this.candidates;
    }
    saveCandidate(candidate:Candidate):Observable<Candidate>{
        return this.dataSource.saveCandidate(candidate);
    }
}