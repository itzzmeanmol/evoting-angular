import { Component, OnInit } from '@angular/core';
import { CandidateRepository } from 'app/model/candidate.repository';
import { Candidate } from 'app/model/candidate.model';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-candidate-login',
  templateUrl: './candidate-login.component.html',
  styleUrls: ['./candidate-login.component.scss']
})
export class CandidateLoginComponent implements OnInit {

  candidateSent: boolean=false;
  submitted: boolean=false;
  constructor(
    public repository: CandidateRepository, 
    public candidate: Candidate, 
    private httpClient: HttpClient)
     { }

  ngOnInit() {
  }

  submitCandidate(form:NgForm){
    this.submitted=true;
    if(form.valid){
      this.repository.saveCandidate(this.candidate).subscribe(candidate=>{
        this.candidate.clear();
        this.candidateSent=true;
        this.submitted=false;
      });
    }
  }
}
