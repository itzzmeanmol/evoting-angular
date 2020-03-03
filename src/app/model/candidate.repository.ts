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

    getCandidates(): Candidate[]{
        return this.candidates;
    }
    saveCandidate(candidate:Candidate):Observable<Candidate>{
        return this.dataSource.saveCandidate(candidate);
    }
    getVin():number[]{
        return this.vins;
    }
    getPassword():string[]{
        return this.password;
    }
    getCandidate(vin:number):Candidate{
        return this.candidates.find(v=>vin==v.vin);
    }

}