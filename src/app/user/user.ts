import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Console, log } from 'console';

@Component({
  selector: 'app-user',
  imports: [RouterLink],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterContentInit, AfterViewChecked, OnDestroy{

  constructor(private router : Router){
    console.log("Contructor called")
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Use for component input property
      console.log("1. ngOnChanges called")
  }

  ngOnInit(): void {
    //use for api calls
      console.log("2. ngOnInit called");
  }

  ngDoCheck(): void {
      //use fo every change detection
      console.log("3. ngDoCheck called");
  }

  ngAfterContentInit(): void {
    //user for ng-content  
    console.log("4. ngAfterContentInit called");
  }

  ngAfterContentChecked(): void {
      console.log("5. ngAfterContentChecked called");
      
  }

  ngAfterViewInit(): void {
      //use for viewChild
      console.log("6 ngAfterViewInit called");
      
  }

  ngAfterViewChecked(): void {
      console.log("7. ngAfterViewChecked called");
      
  }

  ngOnDestroy(): void {
      console.log("8. ngOnDestroy called");
      
  }



  loginData(){
    //user Verification logic
    // this.router.navigateByUrl("structural-direvtive");
    this.router.navigate(['structural-directive'])
  }
}
