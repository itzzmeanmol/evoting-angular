import { Component, OnInit } from '@angular/core';
import { Voter } from 'app/model/voter.model';
import { VoterRepository } from 'app/model/voter.repository';
import { stringify } from 'querystring';
import { Session } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voter-homepage',
  templateUrl: './voter-homepage.component.html',
  styleUrls: ['./voter-homepage.component.scss']
})
export class VoterHomepageComponent implements OnInit {

  private name: string;
  constructor(private voter: Voter, private voterRepository: VoterRepository, private router: Router) { }

  ngOnInit() {
    this.name = this.voterRepository.getVoter(Number(sessionStorage.getItem("user"))).name;
  }

  logout(){
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("password");
    window.location.href = '/home';
    // this.router.navigate(['/home']);
  }

  
}
