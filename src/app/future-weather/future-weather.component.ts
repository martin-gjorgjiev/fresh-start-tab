import { Component } from '@angular/core';

@Component({
  selector: 'app-future-weather',
  standalone: true,
  imports: [],
  templateUrl: './future-weather.component.html',
  styleUrl: './future-weather.component.css'
})
export class FutureWeatherComponent {
  title = 'future-weather-block';
  date='';
  temperatureMin='';
  temperatureMax='';
  sunrise='';
  sunset='';
  windSpeed='';
  windDirection='';
  uvIndex='';
  precipitation='';
  weatherCode='';
  weatherDescription='';
  weatherIcon='';

  ngOnInit(){};
  
}
