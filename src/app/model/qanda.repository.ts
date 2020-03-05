import { Injectable } from '@angular/core';
import { Qanda } from './qanda.model';
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';

@Injectable()
export class QandaRepository{
    private qandas: Qanda[] = [];
    constructor(private dataSource: RestDataSource){
        dataSource.getAllQanda().subscribe(data=>{
            this.qandas = data;
        }); 
    }

    getAllQanda():Qanda[]{
        return this.qandas;
    }

    saveAllQanda(qanda: Qanda):Observable<Qanda>{
        return this.dataSource.saveAllQanda(qanda);
    }

    


}