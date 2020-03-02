import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Voter } from './voter.model';
import { VoterRepository } from './voter.repository';
import { RestDataSource } from './rest.datasource';
import { CandidateRepository } from './candidate.repository';
import { Candidate } from './candidate.model';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    Voter,
    VoterRepository,
    RestDataSource,
    Candidate,
    CandidateRepository
  ]
})
export class ModelModule { }
