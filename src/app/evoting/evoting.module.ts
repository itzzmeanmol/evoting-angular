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






@NgModule({
  declarations: 
  [
    
    EvotingComponent,
    VoterLoginComponent,
    SelectionComponent,
    CandidateLoginComponent,
    LoginPageComponent
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
