import { Component, OnInit } from '@angular/core';
import { GoldService } from '../gold.service';
@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  fullImagePath: string;
  constructor(private _goldService: GoldService) { 
    this.fullImagePath = '../../assets/wahington.jpg'
  }
  obj;
  ngOnInit(){
    var cityname = "washington";
    console.log(cityname)
    let observable = this._goldService.getWeather(cityname);
    observable.subscribe(data => {
      console.log("got info")
      console.log(data)
      this.obj = data
      })}

}
