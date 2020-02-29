
import { Injectable } from '@angular/core';
@Injectable()
export class Voter{
    constructor(
        public id?: number,
        public name?: string,
        public vin?: number,
        public city?: string,
        public formdata?: FormData

    ){

    }

    clear(){
        this.id = null;
        this.name = this.vin = this.city = null;
        this.formdata = null;
    }
}