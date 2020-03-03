import { Component, OnInit } from '@angular/core';
import { VoterRepository } from 'app/model/voter.repository';
import { Voter } from 'app/model/voter.model';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateRepository } from 'app/model/candidate.repository';
import { Candidate } from 'app/model/candidate.model';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private voterRepository: VoterRepository, private voter: Voter, private router: Router, private candidateRepository: CandidateRepository, private candidate: Candidate) { }

  get voters(): Voter[]{
    return this.voterRepository.getVoters();
  }

  get vins(): number[]{
    return this.voterRepository.getVin();
  }

  get passwords(): string[]{
    return this.voterRepository.getPassword();
  }
  get validVoter(): Voter{
    return this.voterRepository.getVoter(this.voter.vin);
  }
  
  selectedLevel;
  uservin;
  userpassword;
  data:Array<Object> = [
      {id: 0, name: "Voter"},
      {id: 1, name: "Candidate"},
      {id: 2, name: "ESS"},
      {id: 3, name: "ESC"}
  ];

  selected(){
    
  }

  validateUser(){
    if(this.voterRepository.getVoter(this.uservin).password==this.userpassword && this.selectedLevel.name=="Voter"){
      console.log(this.voterRepository.getVoter(this.uservin));
      sessionStorage.setItem("user",this.uservin);
      sessionStorage.setItem("password",this.userpassword);
      this.router.navigate(['/home']);
    }
    else if(this.candidateRepository.getCandidate(this.uservin).password==this.userpassword && this.selectedLevel.name=="Candidate"){
      sessionStorage.setItem("user",this.uservin);
      sessionStorage.setItem("password",this.userpassword);
      this.router.navigate(['/home']);
    }
  }
  loginform(form:NgForm){
   
    this.voterRepository.saveVoter
  }
  ngOnInit() {
    console.log(sessionStorage.getItem("user"));
  }

}
