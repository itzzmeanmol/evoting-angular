import { Injectable } from "@angular/core";
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';
import { Candidate } from './candidate.model';


@Injectable()
export class CandidateRepository{
    private candidates: Candidate[]=[];
    private vins:number[]=[];
    private password:string[]=[];
    private results: [] = [];
    constructor(private dataSource:RestDataSource){
        dataSource.getCandidates().subscribe(data=>{
            this.candidates=data;
        });
        dataSource.getResults().subscribe(data=>{
            this.results=data;
        });
    }

    getCandidates(city: string): Candidate[]{
        return this.candidates.filter(c=>city==c.city && c.flag==1);
    }
    saveCandidate(candidate:Candidate):Observable<Candidate>{
        return this.dataSource.saveCandidate(candidate);
    }

    getCandidate(vin:number):Candidate{
        return this.candidates.find(v=>vin==v.vin);
    }

    addVote(candidate:Candidate):Observable<Candidate>{
        return this.dataSource.addVote(candidate);
    }

    getResults():[]{
        return this.results;
    }

    getAllCandidates(): Candidate[]{
        return this.candidates.filter(v=>v.flag==0);
    }

    updateFlag(candidate: Candidate):Observable<Candidate>{
        console.log(candidate);
        return this.dataSource.saveCandidateFlag(candidate);
    }
    deleteCandidate(candidate: Candidate):Observable<Candidate>{
        return this.dataSource.deleteCandidate(candidate);
    }

}