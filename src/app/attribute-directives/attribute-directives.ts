import { Component } from '@angular/core';
import { CommonModule, NgClass } from "@angular/common";
import { BlockList } from 'net';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directives.html',
  styleUrl: './attribute-directives.scss',
})
export class AttributeDirectives {
  textColor: string = 'text-success';
  isTextGreen: boolean = false;

  userClass : string = '';

  changeColor(color:string){
    this.textColor = color;
  }


  styleColor : string = 'orange';
  updateColor(ngStylecolor:string){
    this.styleColor = ngStylecolor
  }
}
