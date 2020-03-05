import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvotingComponent } from './evoting/evoting.component';
import { VoterLoginComponent } from './evoting/voter-login/voter-login.component';
import { SelectionComponent } from './evoting/selection/selection.component';
import { CandidateLoginComponent } from './evoting/candidate-login/candidate-login.component';
import { LoginPageComponent } from './evoting/login-page/login-page.component';
import { VoterHomepageComponent } from './evoting/voter-homepage/voter-homepage.component';
import { CandidateHomepageComponent } from './evoting/candidate-homepage/candidate-homepage.component';
import { ViewCandidateDetailsComponent } from './evoting/voter-homepage/view-candidate-details/view-candidate-details.component';
import { EcaHomepageComponent } from './evoting/eca-homepage/eca-homepage.component';
import { AppliedCandidatesComponent } from './evoting/eca-homepage/applied-candidates/applied-candidates.component';
import { AppliedVotersComponent } from './evoting/eca-homepage/applied-voters/applied-voters.component';
import { CastVoteComponent } from './evoting/voter-homepage/cast-vote/cast-vote.component';
import { VoterLogoutComponent } from './evoting/voter-homepage/voter-logout/voter-logout.component';
import { EssHomepageComponent } from './evoting/ess-homepage/ess-homepage.component';
import { DisableVotingComponent } from './evoting/ess-homepage/disable-voting/disable-voting.component';
import { EnableVotingComponent } from './evoting/ess-homepage/enable-voting/enable-voting.component';
import { ShowResultsComponent } from './evoting/ess-homepage/show-results/show-results.component';
import { ViewCandidatesComponent } from './evoting/candidate-homepage/view-candidates/view-candidates.component';




const routes: Routes = [
  {path: "home", component: EvotingComponent},
  {path: "voterlogin", component: VoterLoginComponent},
  {path: "selection", component: SelectionComponent},
  {path: "candidatelogin", component: CandidateLoginComponent},
  {path: "loginpage", component: LoginPageComponent},
  {path: "voterhomepage", component: VoterHomepageComponent},
  {path: "candidatehomepage", component: CandidateHomepageComponent},
  {path: "ecahomepage", component: EcaHomepageComponent},
  {path: "voterhomepage/viewcandidates", component: ViewCandidateDetailsComponent},
  {path: "ecahomepage/appliedvoters", component: AppliedVotersComponent},
  {path: "ecahomepage/appliedcandidates",component: AppliedCandidatesComponent },
  {path: "voterhomepage/castvote", component: CastVoteComponent},
  {path: "voterhomepage/voterlogout", component: VoterLogoutComponent},
  {path: "esshomepage", component: EssHomepageComponent},
  {path: "esshomepage/disablevoting", component: DisableVotingComponent},
  {path: "esshomepage/enablevoting", component: EnableVotingComponent},
  {path: "esshomepage/showresults", component: ShowResultsComponent},
  {path: "candidatehomepage/viewcandidates", component: ViewCandidatesComponent},

  {path: "**", redirectTo:"/home"}//default known as fallback mechanism
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
