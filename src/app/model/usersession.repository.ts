import { Injectable } from "@angular/core";
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';
import { Candidate } from './candidate.model';
import { UserSession } from './usersession.model';


@Injectable()
export class UserSessionRepository{
    private session: UserSession;
    constructor(private dataSource:RestDataSource){}

    saveUserSession(userSession: UserSession):Observable<UserSession>{
        console.log(userSession);
        return this.dataSource.saveUserSession(userSession);
    }
}