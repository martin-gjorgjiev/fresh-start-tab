import { Component } from '@angular/core';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.css'
})
export class CurrentWeatherComponent {
  title = 'weather-day-block';
  temperature='';
  pressure='';
  visibility='';
  windSpeed='';
  windDirection='';
  weatherCode='';
  weatherDescription='';
  weatherIcon='';

  ngOnInit(){};
  
}
