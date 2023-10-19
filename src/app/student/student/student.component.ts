import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  @Input() name:string ='';
  @Output()
  datapass = new EventEmitter();
  @Output()
  student = new EventEmitter();

  datasubmit(){
    console.log('Event Fire');
    this.datapass.emit({price:200,Discount:10})
  }
  
 
}

