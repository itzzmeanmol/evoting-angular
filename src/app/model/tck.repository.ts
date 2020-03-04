import { Injectable } from '@angular/core';
import { RestDataSource } from './rest.datasource';
import { Tck } from './tck.model';
import { Observable } from 'rxjs';

@Injectable()
export class TckRepository{
    private tcks: Tck[] = [];
    private var: Tck[] = [];
    constructor(private dataSource: RestDataSource){
        dataSource.getTck().subscribe(data=>{
            this.tcks = data;
            this.var = data;
            console.log(this.tcks);
        });
        // console.log(this.tcks);
    }
    

    saveTck(tck:Tck):Observable<Tck>{
        return this.dataSource.saveTck(tck);
    }
    getTck(): Tck[]{
        console.log(this.var);
        return this.var;
    }
}