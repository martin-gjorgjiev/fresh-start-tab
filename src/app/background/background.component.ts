import { Component, effect, Renderer2} from '@angular/core';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './background.component.html',
  styleUrl: './background.component.css'
})
export class BackgroundComponent {
  imgLink="https://i.imgur.com/xmdIVKv.jpeg";

}
