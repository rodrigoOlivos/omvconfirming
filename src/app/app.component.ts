import {Component, OnInit} from '@angular/core';
import {Global} from './common/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = Global.siteTitle;

  constructor() {
    console.log(Global.apiURL);
  }

  ngOnInit(): void {
    console.log(this.title);
  }

}
