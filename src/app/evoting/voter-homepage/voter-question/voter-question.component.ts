import { Component, OnInit } from '@angular/core';
import { Qanda } from 'app/model/qanda.model';
import { QandaRepository } from 'app/model/qanda.repository';

@Component({
  selector: 'app-voter-question',
  templateUrl: './voter-question.component.html',
  styleUrls: ['./voter-question.component.scss']
})
export class VoterQuestionComponent implements OnInit {

  constructor(private qanda: Qanda, private qandaRepository: QandaRepository) { }

  ngOnInit() {
  }
  askquestion(){
    this.qandaRepository.saveAllQanda(this.qanda).subscribe();
  }

}
