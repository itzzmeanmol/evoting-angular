import { Component, OnInit } from '@angular/core';
import { Voter } from 'app/model/voter.model';
import { Candidate } from 'app/model/candidate.model';
import { CandidateRepository } from 'app/model/candidate.repository';

@Component({
  selector: 'app-applied-candidates',
  templateUrl: './applied-candidates.component.html',
  styleUrls: ['./applied-candidates.component.scss']
})
export class AppliedCandidatesComponent implements OnInit {

  constructor(private candidate: Candidate, private candidateRepository: CandidateRepository) { }

  get candidates(): Candidate[]{
    return this.candidateRepository.getAllCandidates(); 
  }
  ngOnInit() {
  }

  approveCandidate(candidate: Candidate){
    console.log(candidate);
    this.candidateRepository.updateFlag(candidate).subscribe();
    location.reload();
  }
  deleteCandidate(candidate: Candidate){
    this.candidateRepository.deleteCandidate(candidate).subscribe();
    location.reload();
  }

}
