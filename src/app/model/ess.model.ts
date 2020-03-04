import { Injectable } from '@angular/core';
@Injectable({providedIn: 'root'},)
export class Ess{
    private id?: number;
    private flag?: number;

    clear(){
        this.id = this.flag = null;
    }
}
