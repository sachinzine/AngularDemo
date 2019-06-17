import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  btnName: string = "Display";
  btnStatus: boolean = true;
  imgpath = "assets/Screenshot (2).png";

  constructor() { }

  ngOnInit() {
  }

  displayBtn() {
    this.btnStatus = !this.btnStatus;
  }

  formSubmit(uname: string, pwd: string, email: string) {
    alert("Your Details : " + uname + " => " + pwd + " => " + email);
  }

}
