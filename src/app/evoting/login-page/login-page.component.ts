import { Component, OnInit } from '@angular/core';
import { VoterRepository } from 'app/model/voter.repository';
import { Voter } from 'app/model/voter.model';
import { Form, NgForm } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { CandidateRepository } from 'app/model/candidate.repository';
import { Candidate } from 'app/model/candidate.model';
import { timingSafeEqual } from 'crypto';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  reloadFlag : boolean = false;
  mySubscription: any;
  constructor(private voterRepository: VoterRepository, private voter: Voter, private router: Router, private candidateRepository: CandidateRepository, private candidate: Candidate) {}

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
      {id: 3, name: "ECA"}
  ];

  // selected(){
    
  // }

 
  


  validateUser(){
   if(this.selectedLevel.name=="ESS" && this.uservin=="9999" && this.userpassword=="9999"){
      sessionStorage.setItem("user","9999");
      sessionStorage.setItem("password","9999");
      this.router.navigate(['/esshomepage']);
    }
  
    else if(this.selectedLevel.name=="ECA" && this.uservin=="8888" && this.userpassword=="8888"){
      sessionStorage.setItem("user","8888");
      sessionStorage.setItem("password","8888");
      this.router.navigate(['/ecahomepage']);
    }
    else if(this.selectedLevel.name=="Candidate" && this.candidateRepository.getCandidate(this.uservin).password==this.userpassword){
      if(Number(this.candidateRepository.getCandidate(this.uservin).flag)==1){
        sessionStorage.setItem("user",this.uservin);
        sessionStorage.setItem("password",this.userpassword);
        this.router.navigate(['/candidatehomepage']);
      }
      else{
        alert("Candidate not approved");
      }
      
    }
    else if(this.voterRepository.getVoter(this.uservin).password==this.userpassword && this.selectedLevel.name=="Voter"){
      if(Number(this.voterRepository.getVoter(this.uservin).flag)==1){
        console.log(this.voterRepository.getVoter(this.uservin));
        sessionStorage.setItem("user",this.uservin);
        sessionStorage.setItem("password",this.userpassword);
        this.router.navigate(['/voterhomepage']);
      }
      else{
        alert("Voter not approved");
      }
      
    }
    else{

      alert("Invalid Credentials");
    }
   
  }
  loginform(form:NgForm){
    this.voterRepository.saveVoter
  }
  ngOnInit() {
    // location.reload();
  }
pressme(){
  window.location.href='/selection'
}
  
}
