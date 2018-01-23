import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { GoldService } from './gold.service';
@Injectable()
export class GoldService {

  constructor(private _http: HttpClient){
    
      }
      // getGold(){
      //   return this._http.get('/gold')
      // }
    
      getWeather(cityname){
       console.log(cityname)
        return this._http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=99a71e9bf02ba50fffe5a97ea8ed68a6`);
      }
    
    
    }
