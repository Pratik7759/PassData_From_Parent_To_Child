import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'parent_child';
  parentData1: any; // parent data---------->passed to child component
  parentData2: any; // parent data---------->passed to child component

  receivedData: any = 0; // data passing to parent after manipulation stored in this variable

  receivedDataFromChild(el: any) {
    this.receivedData = el;
  }
}
