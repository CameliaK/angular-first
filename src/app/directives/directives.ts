import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { DataBinding } from '../data-binding/data-binding';

@Component({
  selector: 'app-directives',
  imports: [NgIf, DataBinding],
  templateUrl: './directives.html',
  styleUrl: './directives.scss',
})
export class Directives {

}
