import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvotingComponent } from './evoting.component';
import { VoterLoginComponent } from './voter-login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModelModule } from 'app/model/model.module';



@NgModule({
  declarations: 
  [
    EvotingComponent, 
    VoterLoginComponent
  ],
  imports: [
    CommonModule, RouterModule, FormsModule, ModelModule
  ],
  exports: [
    EvotingComponent,
     VoterLoginComponent
  ]
})
export class EvotingModule { }
