import { ChangeDetectionStrategy, Component, WritableSignal, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.scss',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class Signals {
  counter = signal(0);
  // counter : WritableSignal<number> = signal(0);
  constructor(){
    this.counter.set(5);

    effect(()=>console.log("The value of counter is: " + this.counter()))
  }

  onIncrement(){
    this.counter.update(initialValu => initialValu+1)
  }

}
