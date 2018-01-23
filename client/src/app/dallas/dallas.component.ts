import { Component, OnInit } from '@angular/core';
import { GoldService } from '../gold.service';
@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  fullImagePath: string;
  constructor(private _goldService: GoldService) { 
    this.fullImagePath = '../../assets/dallas.jpg'
  }
  obj;
  ngOnInit(){
    var cityname = "dallas";
    console.log(cityname)
    let observable = this._goldService.getWeather(cityname);
    observable.subscribe(data => {
      console.log("got info")
      console.log(data)
      this.obj = data
      })}
  

}
