import { Injectable } from "@angular/core";
import { Voter } from './voter.model';
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';

@Injectable()
export class VoterRepository{
    private voters: Voter[]=[];
    constructor(private dataSource:RestDataSource){}

    saveVoter(voter:Voter):Observable<Voter>{
        return this.dataSource.saveVoter(voter);
    }

        
   
}