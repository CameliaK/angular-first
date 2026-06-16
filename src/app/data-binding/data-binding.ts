import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.scss',
})
export class DataBinding {
  name: string = "FDLearning";
  topic: string = "Data Binding";
  image: string = "https://png.pngtree.com/png-vector/20250111/ourmid/pngtree-golden-retriever-dog-pictures-png-image_15147078.png";
  random = "";


  onSave(){
    alert("Data saved succesfully");
  }
  onChange(){
    alert("Country has changed");
  }
}
