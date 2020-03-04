import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voter-logout',
  templateUrl: './voter-logout.component.html',
  styleUrls: ['./voter-logout.component.scss']
})
export class VoterLogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("password");
  }

  pressme(){
    window.location.href = "/home";
    // this.router.navigate(['/home']);
  }

}
