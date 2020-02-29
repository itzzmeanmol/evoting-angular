import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
import { VoterRepository } from 'app/model/voter.repository';
import { Voter } from 'app/model/voter.model';
@Component({
  selector: 'app-voter-login',
  templateUrl: './voter-login.component.html',
  styleUrls: ['./voter-login.component.scss']
})
export class VoterLoginComponent implements OnInit {
  uploadImageData: FormData;

  voterSent: boolean=false;
  submitted: boolean=false;
  selectedFile: File;
  constructor(
    public repository: VoterRepository, 
    public voter: Voter)
     { }

  ngOnInit() {
  }

  submitVoter(form:NgForm){
    this.submitted=true;
    if(form.valid){
      this.repository.saveVoter(this.voter).subscribe(voter=>{
        this.voter.clear();
        this.voterSent=true;
        this.submitted=false;
      });
    }
  }


  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
  
  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    this.uploadImageData = new FormData();
    this.uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    
  }


}
