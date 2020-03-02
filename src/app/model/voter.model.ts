
import { Injectable } from '@angular/core';
@Injectable({providedIn: 'root'},)
export class Voter{
    public id?: number;
        public name?: string;
        public vin?: number;
        public city?: string;
        public password?: string;
        // public formdata?: FormData;

    clear(){
        this.id = null;
        this.name = this.vin = this.city = null;
        // this.formdata = null;
        this.password = null;
    }
}