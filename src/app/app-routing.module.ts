import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvotingComponent } from './evoting/evoting.component';
import { VoterLoginComponent } from './evoting/voter-login/voter-login.component';
import { SelectionComponent } from './evoting/selection/selection.component';
import { CandidateLoginComponent } from './evoting/candidate-login/candidate-login.component';
import { LoginPageComponent } from './evoting/login-page/login-page.component';


const routes: Routes = [
  {path: "home", component: EvotingComponent},
  {path: "voterlogin", component: VoterLoginComponent},
  {path: "selection", component: SelectionComponent},
  {path: "candidatelogin", component: CandidateLoginComponent},
  {path: "loginpage", component: LoginPageComponent},

  {path: "**", redirectTo:"/home"}//default known as fallback mechanism
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
