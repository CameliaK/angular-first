import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive-ngfor-vs-for',
  imports: [FormsModule],
  templateUrl: './structural-directive-ngfor-vs-for.html',
  styleUrl: './structural-directive-ngfor-vs-for.scss',
})
export class StructuralDirectiveNgforVsFor {
  employees: any[] = [
    {empName: 'Kirbith', empNumber:101, empEmail:'kirbith@gmail.com', empDept: 'Tech'},
    {empName: 'Alberto', empNumber:102, empEmail:'alberto@gmail.com', empDept: 'HR'},
    {empName: 'Nadia', empNumber:103, empEmail:'nadia@gmail.com', empDept: 'QFB'}
  ]

  companyList : string[] = ['Atos', 'Google', 'Axios', 'Infosys']
}
