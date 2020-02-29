import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoterLoginComponent } from './evoting/voter-login.component';
import { EvotingComponent } from './evoting/evoting.component';

const routes: Routes = [
  {path: "home", component: EvotingComponent},
  {path: "voterlogin", component: VoterLoginComponent},
  {path: "**", redirectTo:"/home"}//default known as fallback mechanism
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
