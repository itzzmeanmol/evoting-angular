import { Injectable } from "@angular/core";
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';
import { ResourceLoader } from '@angular/compiler';
import { Ess } from './ess.model';



@Injectable()
export class EssRepository{
    private esss: Ess[] = [];
    constructor(private dataSource: RestDataSource){
        dataSource.getEssFlag().subscribe(data=>{
            this.esss = data;
            console.log(this.esss);
        });
    }

   saveEssFlag(ess:Ess):Observable<Ess>{
       return this.dataSource.saveEssFlag(ess);
   }
    getEssFlag():Ess[]{
        return this.esss;
    }

}