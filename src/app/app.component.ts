import { Component } from '@angular/core';
import dato from 'src/assets/JSON/datos.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parcial';

  Datos: any = [dato];
}
