import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ess-homepage',
  templateUrl: './ess-homepage.component.html',
  styleUrls: ['./ess-homepage.component.scss']
})
export class EssHomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  enableButton(){
    window.location.href = '/esshomepage/enablevoting';

  }
  disableButton(){
    window.location.href = '/esshomepage/disablevoting';
  }
  tckButton(){
    var randomstring = Math.random().toString(36).slice(-8);
    alert("Copy this TCK password: "+randomstring);
  }

}
