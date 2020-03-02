import { Injectable } from "@angular/core";
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';
import { Voter } from './voter.model';

@Injectable()
export class VoterRepository{
    private voters: Voter[]=[];
    constructor(private dataSource:RestDataSource){}

    getVoters(): Voter[]{
        return this.voters;
    }
    saveVoter(voter:Voter):Observable<Voter>{
        return this.dataSource.saveVoter(voter);
    }
}