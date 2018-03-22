import {
  Component, OnInit, OnChanges, Input,
  SimpleChanges, ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() {
    console.log("Constructor called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called");
    console.log(changes);
  }

  ngOnInit() {
    console.log("Init called");
  }

}
