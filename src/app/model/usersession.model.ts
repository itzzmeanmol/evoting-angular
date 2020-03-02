import { Injectable } from '@angular/core';
@Injectable({providedIn: 'root'},)
export class UserSession{
        public id?: number;
        public vin?: number;
        public user?: string;
        public password?: string;

    clear(){
        this.id = null;
        this.vin = this.user = null;
        this.password = null;
    }
}