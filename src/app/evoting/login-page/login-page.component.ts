import { Component, OnInit } from '@angular/core';
import { VoterRepository } from 'app/model/voter.repository';
import { Voter } from 'app/model/voter.model';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private voterRepository: VoterRepository, private voter: Voter, private router: Router) { }

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
  data:Array<Object> = [
      {id: 0, name: "Voter"},
      {id: 1, name: "Candidate"},
      {id: 2, name: "ESS"},
      {id: 3, name: "ESC"}
  ];

  selected(){
    console.log(this.selectedLevel.name);
  }

  validateUser(){
    console.log(this.voterRepository.getVoter(this.voter.vin))
    if(this.voterRepository.getVoter(this.voter.vin)!=null && this.selectedLevel.name=="Voter"){
      this.router.navigate(['/home']);
    }
  }
  loginform(form:NgForm){
    this.voterRepository.saveVoter
  }
  ngOnInit() {
  }

}
