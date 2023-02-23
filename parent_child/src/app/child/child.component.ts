import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() inputNumber1: any; //here value of inputNumber1 is 10 , value assigned to child component variable
  @Input() inputNumber2: any; //here value of inputNumber1 is 50 , value assigned to child component variable

  @Output() sendData = new EventEmitter();

  ngOnInit():void{
    this.transferDataToParent();
  }

  transferDataToParent() {
    let sum;
    sum = +this.inputNumber1 - +this.inputNumber2;
    this.sendData.emit(sum);
  }
}
