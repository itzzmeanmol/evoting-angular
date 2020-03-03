import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
import { VoterRepository } from 'app/model/voter.repository';
import { Voter } from 'app/model/voter.model';
import { HttpClient, HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-voter-login',
  templateUrl: './voter-login.component.html',
  styleUrls: ['./voter-login.component.scss']
})
export class VoterLoginComponent implements OnInit {


  voterSent: boolean=false;
  submitted: boolean=false;




  constructor(
    public repository: VoterRepository, 
    public voter: Voter, private httpClient: HttpClient)
     { }

  ngOnInit() {
  }

  submitVoter(form:NgForm){
    this.submitted=true;
    if(form.valid){
      this.repository.saveVoter(this.voter).subscribe(voter=>{
        this.voter.clear();
        this.voterSent=true;
        this.submitted=false;
      });
    }
  }

}
