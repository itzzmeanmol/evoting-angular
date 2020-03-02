import { Injectable } from "@angular/core";
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';
import { Voter } from './voter.model';


@Injectable()
export class VoterRepository{
    private voters: Voter[]=[];
    private vins:number[] = [];
    private password:string[] = [];

    constructor(private dataSource:RestDataSource){
        dataSource.getVoters().subscribe(data=>{
            this.voters = data;
        });
    }

    getVoters(): Voter[]{
        return this.voters;
    }
    saveVoter(voter:Voter):Observable<Voter>{
        return this.dataSource.saveVoter(voter);
    }
    getVin():number[]{
        return this.vins;
    }
    getPassword():string[]{
        return this.password;
    }
    getVoter(vin:number):Voter{
        return this.voters.find(v=>vin==v.vin);
    }

}