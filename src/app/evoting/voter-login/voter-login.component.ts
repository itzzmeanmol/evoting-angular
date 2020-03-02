import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
import { VoterRepository } from 'app/model/voter.repository';
import { Voter } from 'app/model/voter.model';
import { HttpClient, HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-voter-login',
  templateUrl: './voter-login.component.html',
  styleUrls: ['./voter-login.component.scss']
})
export class VoterLoginComponent implements OnInit {
  // constructor(private httpClient: HttpClient) { }
  
  // uploadImageData: FormData;

  voterSent: boolean=false;
  submitted: boolean=false;
  // selectedFile: File;

  // retrievedImage: any;
  // base64Data: any;
  // retrieveResonse: any;
  // message: string;
  // imageName: any;



  constructor(
    public repository: VoterRepository, 
    public voter: Voter, private httpClient: HttpClient)
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


  // public onFileChanged(event) {
  //   //Select File
  //   this.selectedFile = event.target.files[0];
  // }
  
  // onUpload() {
  //   console.log(this.selectedFile);
    
  //   //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
  //   this.uploadImageData = new FormData();
  //   this.uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    

  //   //Make a call to the Spring Boot Application to save the image
  // this.httpClient.post('http://localhost:7070/voter', this.uploadImageData, { observe: 'response' })
  // .subscribe((response) => {
  //   if (response.status === 200) {
  //     this.message = 'Image uploaded successfully';
  //   } else {
  //     this.message = 'Image not uploaded successfully';
  //   }
  // }
  // );
  // }


  


}
