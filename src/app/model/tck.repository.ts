import { Injectable } from '@angular/core';
import { RestDataSource } from './rest.datasource';
import { Tck } from './tck.model';
import { Observable } from 'rxjs';

@Injectable()
export class TckRepository{
    private tcks: Tck[] = [];
    constructor(private dataSource: RestDataSource){
        dataSource.getTck().subscribe(data=>{
            this.tcks = data;
            console.log(this.tcks);
        });
    }
    

    saveTck(tck:Tck):Observable<Tck>{
        return this.dataSource.saveTck(tck);
    }
    getTck(): Tck[]{
        return this.tcks;
    }
}