import { Component, OnInit } from '@angular/core';
import { Candidate } from 'app/model/candidate.model';
import { CandidateRepository } from 'app/model/candidate.repository';
import { Voter } from 'app/model/voter.model';
import { VoterRepository } from 'app/model/voter.repository';

@Component({
  selector: 'app-view-candidate-details',
  templateUrl: './view-candidate-details.component.html',
  styleUrls: ['./view-candidate-details.component.scss']
})
export class ViewCandidateDetailsComponent implements OnInit {

  constructor(private candidate: Candidate, private candidateRepository: CandidateRepository, private voter: Voter, private voterRepository: VoterRepository) { }

  get candidates(): Candidate[]{
    return this.candidateRepository.getCandidates(this.voterRepository.getVoter(Number(sessionStorage.getItem("user"))).city);
  }
  ngOnInit() {
  }

}
