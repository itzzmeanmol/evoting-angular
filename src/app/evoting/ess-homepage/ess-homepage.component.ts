import { Component, OnInit } from '@angular/core';
import { Tck } from 'app/model/tck.model';
import { TckRepository } from 'app/model/tck.repository';

@Component({
  selector: 'app-ess-homepage',
  templateUrl: './ess-homepage.component.html',
  styleUrls: ['./ess-homepage.component.scss']
})
export class EssHomepageComponent implements OnInit {

  constructor(private tck: Tck, private tckRepository:TckRepository) { }

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
    this.tck.tck = randomstring;
    this.tck.id = Number(1);
    this.tckRepository.saveTck(this.tck).subscribe();
    alert("Copy this TCK password: "+randomstring);
  }

  logout(){
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("password");
    window.location.href='/home';
  }
  showResults(){
    window.location.href='/esshomepage/showresults';
  }

}
