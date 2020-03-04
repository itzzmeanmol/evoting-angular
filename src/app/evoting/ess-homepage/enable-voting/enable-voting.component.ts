import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tck } from 'app/model/tck.model';
import { TckRepository } from 'app/model/tck.repository';
import { VoterRepository } from 'app/model/voter.repository';
import { Ess } from 'app/model/ess.model';
import { EssRepository } from 'app/model/ess.repository';

@Component({
  selector: 'app-enable-voting',
  templateUrl: './enable-voting.component.html',
  styleUrls: ['./enable-voting.component.scss']
})
export class EnableVotingComponent implements OnInit {

  constructor(private tck: Tck, private tckRepository: TckRepository, private voterRepository: VoterRepository, private ess: Ess, private essRepository: EssRepository) { }
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
      // this.voterRepository.enableButton = false;
      this.ess.ess = Number(1);
      this.ess.id = Number(1);
      // this.essRepository.saveEss(this.ess).subscribe();
      this.essRepository.saveEssFlag(this.ess).subscribe();
      
    }
    else{
      alert("invalid");
    }
    
  }
}
