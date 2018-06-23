import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private route: ActivatedRoute, private router: Router, private serversService: ServersService) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );

    /*const id = parseInt(this.route.snapshot.params['id']);
    this.server = this.serversService.getServer(id);

    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(parseInt(params['id']));
      }
    );*/

  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
