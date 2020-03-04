
import { Injectable } from '@angular/core';
@Injectable({providedIn: 'root'},)
export class Voter{
    public id?: number;
        public name?: string;
        public vin?: number;
        public city?: string;
        public password?: string;
        public flag?: number = Number(0);
        public castvote?: number = Number(0);

    clear(){
        this.id = null;
        this.name = this.vin = this.city = null;
        this.password = null;
        this.flag = null;
        this.castvote = null;
    }
}