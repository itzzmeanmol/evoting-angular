import { Component, OnInit } from '@angular/core';
import { CandidateRepository } from 'app/model/candidate.repository';
import { Voter } from 'app/model/voter.model';
import { VoterRepository } from 'app/model/voter.repository';
import { Candidate } from 'app/model/candidate.model';
import { ResourceLoader } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cast-vote',
  templateUrl: './cast-vote.component.html',
  styleUrls: ['./cast-vote.component.scss']
})
export class CastVoteComponent implements OnInit {

  constructor(private candidate: Candidate, private candidateRepository: CandidateRepository, private voter: Voter, private voterRepository: VoterRepository, private router: Router) { }
clicked: boolean = false;
  flagValue: number;
  city: string;
  ngOnInit() {
    this.flagValue = this.voterRepository.getVoter(Number(sessionStorage.getItem("user"))).castvote;
    this.city = this.voterRepository.getVoter(Number(sessionStorage.getItem("user"))).city;
  }
   

  get candidates(): Candidate[]{
    return this.candidateRepository.getCandidates(this.city);
  }
  

  castVote(candidate: Candidate){
      this.candidateRepository.addVote(candidate).subscribe();
      this.voterRepository.castVote(this.voterRepository.getVoter(Number(sessionStorage.getItem("user")))).subscribe();
      // this.router.navigate(['/voterhomepage/voterlogout'])
      // location.reload();
  }
}
