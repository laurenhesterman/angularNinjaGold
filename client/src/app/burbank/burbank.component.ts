import { Component, OnInit } from '@angular/core';
import { GoldService } from '../gold.service';
@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  fullImagePath: string;
  constructor(private _goldService: GoldService) { 
    this.fullImagePath = '../../assets/burbank.jpg'
  }
  obj;
  ngOnInit(){
    var cityname = "burbank";
    console.log(cityname)
    let observable = this._goldService.getWeather(cityname);
    observable.subscribe(data => {
      console.log("got info")
      console.log(data)
      this.obj = data
      })}
}
