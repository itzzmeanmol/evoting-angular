
import { Injectable } from '@angular/core';
@Injectable({providedIn: 'root'},)
export class Candidate{
        public id?: number;
        public name?: string;
        public vin?: number;
        public city?: string;
        public age?: number;
        public gender?: string;
        public partyname?: string;
        public password?: string;
        // public formdata?: FormData;

    clear(){
        this.id = null;
        this.name = this.vin = this.city = this.age = this.partyname = this.gender = null;
        // this.formdata = null;
        this.password = null;
    }
}