import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoreService } from '../core.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy, OnInit {

  constructor(
    private core: CoreService
  ) { }

  title: String = ' ';
  titleArray: Array<string> = this.core.messageArray;
  titleCounter: any = 0;
  charCounter: any = 0;
  titleArrayIntervalId: any;
  titleLeterIntervalId: any;

  ngOnInit(): void {
    this.titleArrayIntervalId = setInterval(() => {
      let currentWord = this.titleArray[this.titleCounter % this.titleArray.length];
      this.titleCounter++;
      this.title = ' ';
      this.charCounter = 0;
      this.titleLeterIntervalId = setInterval(() => {
        if (this.charCounter < currentWord.length) {
          this.title = this.title + (currentWord[this.charCounter]);
          this.charCounter++;
        } else {
          this.core.clearIntervalOperation(this.titleLeterIntervalId);
        }
      }, 125);
    }, 10000);
  }

  ngOnDestroy(): void {
    this.core.clearIntervalOperation(this.titleArrayIntervalId);
    this.core.clearIntervalOperation(this.titleLeterIntervalId);
  }
}
