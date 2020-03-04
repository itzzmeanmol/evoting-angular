import { Injectable } from "@angular/core";
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';
import { Candidate } from './candidate.model';


@Injectable()
export class CandidateRepository{
    private candidates: Candidate[]=[];
    private vins:number[]=[];
    private password:string[]=[];
    constructor(private dataSource:RestDataSource){
        dataSource.getCandidates().subscribe(data=>{
            this.candidates=data;
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
    // getCandidatesHighest(city: string): Candidate[]{
    //     this.candidates.filter(c=>city==c.city && c.flag==1);
    // }

}