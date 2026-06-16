import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { CustomPipe } from '../custom-pipe';

@Component({
  selector: 'app-built-in-pipes',
  imports: [CommonModule, CustomPipe],
  templateUrl: './built-in-pipes.html',
  styleUrl: './built-in-pipes.scss',
})
export class BuiltInPipes {
  angularPipes : string = "user pipes to format data in angular templates"
  mobileNumber : any = undefined

  personData = {
    name : 'john',
    age : 30,
    city: 'Xalapa'
  }

  currentDate : Date = new Date();

  items = of(['Apple', 'Banan', 'Mango'])
}
