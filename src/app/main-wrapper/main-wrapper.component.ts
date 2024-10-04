import { Component } from '@angular/core';
import { CitySelectorComponent } from "../city-selector/city-selector.component";
import { ClockComponent } from "../clock/clock.component";
import { CurrentWeatherComponent } from "../current-weather/current-weather.component";
import { FutureWeatherComponent } from "../future-weather/future-weather.component";

@Component({
  selector: 'app-main-wrapper',
  standalone: true,
  imports: [CitySelectorComponent, ClockComponent, CurrentWeatherComponent, FutureWeatherComponent],
  templateUrl: './main-wrapper.component.html',
  styleUrl: './main-wrapper.component.css'
})
export class MainWrapperComponent {

}
