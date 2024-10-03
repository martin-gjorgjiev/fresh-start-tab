import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundComponent} from './background/background.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BackgroundComponent,MainWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fresh-start-tab';
}
