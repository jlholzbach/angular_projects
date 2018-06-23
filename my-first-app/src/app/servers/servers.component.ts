import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreated = false;
  serverCreationStatus = "No server was created!";
  serverName = "Test Server";
  servers = ['Test Server', 'Test Server 2'];

  constructor() {
    setTimeout(() => {this.allowNewServer = true;}, 2000);
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created! Name: " + this.serverName;
  }

  onUpdateServerName(event) {
    this.serverName = event.target.value;
  }

  ngOnInit() {
  }

}
