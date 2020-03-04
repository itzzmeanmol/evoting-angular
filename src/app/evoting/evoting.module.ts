import { NgModule } from '@angular/core';
import { VoterLoginComponent } from './voter-login/voter-login.component';
import { EvotingComponent } from './evoting.component';
import { SelectionComponent } from './selection/selection.component';
import { CandidateLoginComponent } from './candidate-login/candidate-login.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModelModule } from 'app/model/model.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { VoterHomepageComponent } from './voter-homepage/voter-homepage.component';
import { CandidateHomepageComponent } from './candidate-homepage/candidate-homepage.component';
import { ViewCandidateDetailsComponent } from './voter-homepage/view-candidate-details/view-candidate-details.component';
import { EcaHomepageComponent } from './eca-homepage/eca-homepage.component';
import { AppliedCandidatesComponent } from './eca-homepage/applied-candidates/applied-candidates.component';
import { AppliedVotersComponent } from './eca-homepage/applied-voters/applied-voters.component';
import { CastVoteComponent } from './voter-homepage/cast-vote/cast-vote.component';
import { VoterLogoutComponent } from './voter-homepage/voter-logout/voter-logout.component';
import { EssHomepageComponent } from './ess-homepage/ess-homepage.component';
import { EnableVotingComponent } from './ess-homepage/enable-voting/enable-voting.component';
import { DisableVotingComponent } from './ess-homepage/disable-voting/disable-voting.component';
import { ShowResultsComponent } from './ess-homepage/show-results/show-results.component';







@NgModule({
  declarations: 
  [
    
    EvotingComponent,
    VoterLoginComponent,
    SelectionComponent,
    CandidateLoginComponent,
    LoginPageComponent,
    VoterHomepageComponent,
    CandidateHomepageComponent,
    ViewCandidateDetailsComponent,
    EcaHomepageComponent,
    AppliedCandidatesComponent,
    AppliedVotersComponent,
    CastVoteComponent,
    VoterLogoutComponent,
    EssHomepageComponent,
    EnableVotingComponent,
    DisableVotingComponent,
    ShowResultsComponent
  ],
  imports: [

    CommonModule,
    RouterModule,
    FormsModule,
    ModelModule
  ],
  exports: [
    EvotingComponent,
    VoterLoginComponent,
    SelectionComponent,
    CandidateLoginComponent,
    LoginPageComponent
  ]
})
export class EvotingModule { }
