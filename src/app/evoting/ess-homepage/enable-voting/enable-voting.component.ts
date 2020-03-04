import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tck } from 'app/model/tck.model';
import { TckRepository } from 'app/model/tck.repository';
import { VoterRepository } from 'app/model/voter.repository';

@Component({
  selector: 'app-enable-voting',
  templateUrl: './enable-voting.component.html',
  styleUrls: ['./enable-voting.component.scss']
})
export class EnableVotingComponent implements OnInit {

  constructor(private tck: Tck, private tckRepository: TckRepository, private voterRepository: VoterRepository) { }
  esspassword;
  tckpassword;
  ngOnInit() {
    
  }
  private tckpass: string;
  enableform(form:NgForm){
    
  }
  enableVoting(){
    this.tckpass = this.tckRepository.getTck()[0].tck;
    if(this.esspassword == 9999 && this.tckpassword == this.tckpass){
      this.voterRepository.enableButton = false;
    }
    else{
      alert("invalid");
    }
    
  }
}
