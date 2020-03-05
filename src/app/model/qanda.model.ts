import { Injectable } from '@angular/core';
@Injectable({providedIn: 'root'},)
export class Qanda{
    public id?: number;
    
    public q?: string;
    public a?:string;
    public flag?:number;

    clear(){
        this.id =this.q=this.a=this.flag= null;
    }
}