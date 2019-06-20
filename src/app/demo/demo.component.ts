import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  btnName: string = "Display";
  btnStatus: boolean = true;
  buttons = ['Btn1', 'Btn2', 'Btn3'];
  i = 4;
  btnDisabled: boolean = false;
  sample = [];

  constructor(private _demoService: DemoService) { }

  ngOnInit() {
    this._demoService.getData()
      .subscribe(data => this.sample = data);
  }

  displayBtn() {
    this.btnStatus = !this.btnStatus;
  }

  formSubmit(uname: string, pwd: string, email: string) {
    alert("Your Details : " + uname + " => " + pwd + " => " + email);
  }

  addBtn() {
    this.buttons.push("Btn" + this.i);
    this.i++;
    if (this.i > 0) {
      this.btnDisabled = false;
    }
  }

  deleteBtn() {
    this.buttons.pop();
    this.i--;
    if (this.i < 2) {
      this.btnDisabled = true;
    }
  }

}
