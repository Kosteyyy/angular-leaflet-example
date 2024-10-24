import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from "./map/map.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppComponent {
  title = 'angular-leaflet-example';
}
