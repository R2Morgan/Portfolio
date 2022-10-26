import { Component, Input, OnInit } from '@angular/core';
import { delay, interval } from 'rxjs';

@Component({
  selector: 'recent-card',
  templateUrl: './recent-card.component.html',
  styleUrls: ['./recent-card.component.scss']
})
export class RecentCardComponent implements OnInit {
  @Input() cardText: string | undefined;

  private isHalted = false;

  currentItem: number = 1;

  constructor() {
  }

  ngOnInit(): void {
    interval(5000).subscribe(() => {if(!this.isHalted)this.nextItem()});
  }

  nextItem(){
    this.currentItem = this.currentItem == 3 ? 1 : this.currentItem + 1;
    this.isHalted = true;
    setTimeout(() => {this.isHalted = false;}, 5000);
  }

  previousItem(){
    this.currentItem = this.currentItem == 1 ? 3 : this.currentItem - 1;
    setTimeout(() => {this.isHalted = false;}, 5000);
  }

}
