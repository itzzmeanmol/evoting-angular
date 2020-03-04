import { Component, OnInit } from '@angular/core';
import { CandidateRepository } from 'app/model/candidate.repository';
import { Candidate } from 'app/model/candidate.model';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.scss']
})
export class ShowResultsComponent implements OnInit {

  constructor(private candidate: Candidate, private candidateRepository: CandidateRepository) { }
pressme(){
  
  window.location.href='/home';
}
  ngOnInit() {

  }
  get candidates(): []{
    console.log(this.candidateRepository.getResults());
    return this.candidateRepository.getResults();
  }

}
