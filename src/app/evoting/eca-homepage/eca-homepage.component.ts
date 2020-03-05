import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eca-homepage',
  templateUrl: './eca-homepage.component.html',
  styleUrls: ['./eca-homepage.component.scss']
})
export class EcaHomepageComponent implements OnInit {

  constructor() { }
  logout(){
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("password");
    window.location.href='/home';
  }
  ngOnInit() {
  }

}
