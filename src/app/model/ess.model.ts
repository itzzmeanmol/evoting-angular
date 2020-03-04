import { Injectable } from '@angular/core';
@Injectable({providedIn: 'root'},)
export class Ess{
    public id?: number = 1;
    public ess?: number = 1;

    clear(){
        this.id = this.ess = null;
    }
}
