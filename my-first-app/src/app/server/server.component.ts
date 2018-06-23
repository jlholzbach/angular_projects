import { Component } from '@angular/core';

@Component({
  selector: 'app-server', //html element by which this component can be used
  templateUrl: './server.component.html', //file to use for html
  styleUrls: ['./server.component.css']
})

/*Decorator Contains information that will be stored as
metadata telling Angular what to do with this class*/

export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
  }

  getColor() {
    return this.serverStatus == "online" ? 'green' : 'red';
  }

  getServerStatus() {
    return this.serverStatus;
  }
}
