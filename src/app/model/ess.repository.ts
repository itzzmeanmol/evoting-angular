import { Injectable } from "@angular/core";
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';
import { ResourceLoader } from '@angular/compiler';
import { Ess } from './ess.model';



@Injectable()
export class EssRepository{

    constructor(dataSource: RestDataSource){}

    getFlag(): Observable<Ess>{
        return null;
    }
}