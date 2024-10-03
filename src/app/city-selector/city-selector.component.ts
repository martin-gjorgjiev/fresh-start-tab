import { Component } from '@angular/core';

@Component({
  selector: 'app-city-selector',
  standalone: true,
  imports: [],
  templateUrl: './city-selector.component.html',
  styleUrl: './city-selector.component.css'
})

export class CitySelectorComponent {
  cityText='';
  longitude='';
  latitude='';
  timezone='';
  forecastDays=4;
  apiKey='';
  
  ngOnInit(){};

}
