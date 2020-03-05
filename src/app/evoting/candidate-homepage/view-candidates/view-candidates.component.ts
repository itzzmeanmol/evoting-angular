import { Component, OnInit } from '@angular/core';
import { Candidate } from 'app/model/candidate.model';
import { CandidateRepository } from 'app/model/candidate.repository';
import { Voter } from 'app/model/voter.model';
import { VoterRepository } from 'app/model/voter.repository';

@Component({
  selector: 'app-view-candidates',
  templateUrl: './view-candidates.component.html',
  styleUrls: ['./view-candidates.component.scss']
})
export class ViewCandidatesComponent implements OnInit {

  constructor(private candidate: Candidate, private candidateRepository: CandidateRepository, private voter: Voter, private voterRepository: VoterRepository) { }

  get candidates(): Candidate[]{
    // console.log(this.candidateRepository.getCandidates(this.voterRepository.getVoter(Number(sessionStorage.getItem("user"))).city));
    // return this.candidateRepository.getCandidates(this.candidateRepository.getCandidate(Number(sessionStorage.getItem("user"))).city);
    return this.candidateRepository.getCandidates(this.candidateRepository.getCandidate(Number(sessionStorage.getItem("user"))).city)
  }
  ngOnInit() {
    console.log(this.candidateRepository.getCandidates(this.candidateRepository.getCandidate(Number(sessionStorage.getItem("user"))).city));
  }

}
