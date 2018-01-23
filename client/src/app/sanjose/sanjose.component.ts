import { Component, OnInit } from '@angular/core';
import { GoldService } from '../gold.service';
@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  fullImagePath: string;
  constructor(private _goldService: GoldService) {
    this.fullImagePath = '../../assets/sanjose.jpg'
  }
  obj;
  ngOnInit(){
    var cityname = "95112";
    console.log(cityname)
    let observable = this._goldService.getWeather(cityname);
    observable.subscribe(data => {
      console.log("got info")
      console.log(data)
      this.obj = data
      })}
  

}
