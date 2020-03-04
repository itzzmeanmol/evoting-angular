import { Injectable } from '@angular/core';
@Injectable({providedIn: 'root'},)
export class Tck{
    public id?: number;
    public tck?: string;

    clear(){
        this.id = this.tck = null;
    }
}