import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Voter } from './voter.model';
import { VoterRepository } from './voter.repository';
import { HttpClientModule } from '@angular/common/http';
import { RestDataSource } from './rest.datasource';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, HttpClientModule
  ],
  providers: [
    Voter, 
    VoterRepository, 
    RestDataSource
  ]
})
export class ModelModule { }
