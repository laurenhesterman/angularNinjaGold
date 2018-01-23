import { Component, OnInit } from '@angular/core';
import { GoldService } from '../gold.service';
@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  fullImagePath: string;
  constructor(private _goldService: GoldService) { 
    this.fullImagePath = '../../assets/chicago.jpg'
  }
  obj;
  ngOnInit(){
    var cityname = "chicago";
    console.log(cityname)
    let observable = this._goldService.getWeather(cityname);
    observable.subscribe(data => {
      console.log("got info")
      console.log(data)
      this.obj = data
      })}
  

}
