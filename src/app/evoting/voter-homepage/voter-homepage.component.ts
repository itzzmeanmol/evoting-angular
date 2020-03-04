import { Component, OnInit } from '@angular/core';
import { Voter } from 'app/model/voter.model';
import { VoterRepository } from 'app/model/voter.repository';
import { stringify } from 'querystring';
import { Session } from 'protractor';
import { Router } from '@angular/router';
import { EssRepository } from 'app/model/ess.repository';
import { Ess } from 'app/model/ess.model';

@Component({
  selector: 'app-voter-homepage',
  templateUrl: './voter-homepage.component.html',
  styleUrls: ['./voter-homepage.component.scss']
})
export class VoterHomepageComponent implements OnInit {

  private name: string;
  private enable: number;

  constructor(private voter: Voter, private voterRepository: VoterRepository, private router: Router, private essRepository: EssRepository, private ess1: Ess) { }

  ngOnInit() {
    this.name = this.voterRepository.getVoter(Number(sessionStorage.getItem("user"))).name;
    // this.enable = this.essRepository.getEss()[0].ess;
    // console.log(this.essRepository.getEssFlag()[0].ess);
    
  }

  logout(){
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("password");
    window.location.href = '/home';
  }


  get enableFlag(){
    return this.essRepository.getEssFlag();
  }
  
}
