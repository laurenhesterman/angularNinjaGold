import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { GoldService } from '../gold.service';
@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit{
  fullImagePath: string;
  constructor(private _goldService: GoldService) {
    this.fullImagePath = '../../assets/seattle.jpg'
   }
  obj;
  ngOnInit(){
    var cityname = "seattle";
    console.log(cityname)
    let observable = this._goldService.getWeather(cityname);
    observable.subscribe(data => {
      console.log("got info")
      console.log(data)
      this.obj = data
      })}
  
  
  // getWeather(){
  //   var cityname = "seattle";
  //   console.log(cityname)
  //   let observable = this._goldService.getWeather(cityname);
  //   observable.subscribe(data => {
  //     console.log("got info")
      
  //   })

  }
