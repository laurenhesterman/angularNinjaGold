import { Component } from '@angular/core';
import { GoldService } from './gold.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  gold_count = 0;
  log = []
  constructor(private _goldService: GoldService) { }
  clickbutton(val) {
    if (val == 'farm') {
      var tempgold = Math.floor(Math.random() * (3) + 2)
      this.gold_count += tempgold
      this.log.push(`You earned ${tempgold} at the farm.`)
    }
    else if (val == 'cave') {
      var tempgold = Math.floor(Math.random() * (5) + 5)
      this.gold_count += tempgold
      this.log.push(`You earned ${tempgold} at the cave.`)
    }
    else if (val == 'house') {
      var tempgold = Math.floor(Math.random() * (8) + 7)
      this.gold_count += tempgold
      this.log.push(`You earned ${tempgold} at the house.`)
    }
    else if (val == 'casino') {
      var tempgold = Math.floor(Math.random() * (200) -100)
      this.gold_count += tempgold
      if (tempgold>0){
        this.log.push(`You earned ${tempgold} at the casino.`)
      }
      else {
        tempgold= Math.abs(tempgold)
        this.log.push(`You lost ${tempgold} at the casino.`)
      }
      
    }
    this._goldService.postGold(this.gold_count, this.log)
  }
}
