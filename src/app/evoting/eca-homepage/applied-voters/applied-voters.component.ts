import { Component, OnInit } from '@angular/core';
import { Voter } from 'app/model/voter.model';
import { VoterRepository } from 'app/model/voter.repository';

@Component({
  selector: 'app-applied-voters',
  templateUrl: './applied-voters.component.html',
  styleUrls: ['./applied-voters.component.scss']
})
export class AppliedVotersComponent implements OnInit {

  constructor(private voter: Voter, private voterRepository: VoterRepository) { }

  get voters(): Voter[]{
    return this.voterRepository.getVoters(); 
  }
  ngOnInit() {
  }

  approveVoter(voter: Voter){
    console.log(voter);
    this.voterRepository.updateFlag(voter).subscribe();
    location.reload();
  }
  deleteVoter(voter: Voter){
    this.voterRepository.deleteVoter(voter).subscribe();
    location.reload();
  }

}
