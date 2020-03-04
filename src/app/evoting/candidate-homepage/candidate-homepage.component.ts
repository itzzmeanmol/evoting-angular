import { Component, OnInit } from '@angular/core';
import { Voter } from 'app/model/voter.model';
import { CandidateRepository } from 'app/model/candidate.repository';
import { Router, CanDeactivate } from '@angular/router';
import { EssRepository } from 'app/model/ess.repository';
import { Ess } from 'app/model/ess.model';
import { Candidate } from 'app/model/candidate.model';

@Component({
  selector: 'app-candidate-homepage',
  templateUrl: './candidate-homepage.component.html',
  styleUrls: ['./candidate-homepage.component.scss']
})
export class CandidateHomepageComponent implements OnInit {

  private name: string;
  private enable: number;

  constructor(private candidate:Candidate, private router: Router, private essRepository: EssRepository, private ess1: Ess, private candidateRepository: CandidateRepository) { }

  ngOnInit() {
    this.name = this.candidateRepository.getCandidate(Number(sessionStorage.getItem("user"))).name;
    // this.enable = this.essRepository.getEss()[0].ess;
    // console.log(this.essRepository.getEssFlag()[0].ess);
    
  }

  logout(){
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("password");
    window.location.href = '/home';
  }

  viewCandidates(){
    this.router.navigate(['/candidatehomepage/viewcandidates']);
  }

  get enableFlag(){
    return this.essRepository.getEssFlag();
  }

}
