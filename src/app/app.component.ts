import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string = 'Rodríguez';
  array: number[] = [1,2,3,4,5,6,7,8,9]; 
  PI: number = Math.PI;
  percentage: number = 0.3423;
  salary: number = 1234.5;

  car = {
    type: '4 puertas pequeño',
    cc: 1600,
    motor: '1.4 litros',
    color: 'negro',
    brand: 'nissan'
  }
}
