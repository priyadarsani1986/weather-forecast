import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  enterName = "";
  parentData = "";

  ngOnInit(): void {
  }

  transferData() {
    this.parentData = this.enterName;
  }
}
