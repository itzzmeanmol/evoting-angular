import { Injectable } from "@angular/core";
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';
import { Voter } from './voter.model';


@Injectable()
export class VoterRepository{
    private voters: Voter[]=[];
    private vins:number[] = [];
    private password:string[] = [];
    // public enableButton: boolean = true;

    constructor(private dataSource:RestDataSource){
        dataSource.getVoters().subscribe(data=>{
            this.voters = data;
        });
    }

    getVoters(): Voter[]{
        return this.voters.filter(v=>v.flag==0);
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
    updateFlag(voter: Voter):Observable<Voter>{
        console.log(voter);
        return this.dataSource.saveFlag(voter);
    }
    deleteVoter(voter: Voter):Observable<Voter>{
        return this.dataSource.deleteVoter(voter);
    }
    castVote(voter: Voter):Observable<Voter>{
        return this.dataSource.castVote(voter);
    }

}