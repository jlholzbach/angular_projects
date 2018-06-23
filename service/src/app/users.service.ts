import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()

export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  inactive: number = 0;
  active: number = 0;

  constructor(private counterService: CounterService) {}

  onSetToInactive(id: number) {
    this.inactive++;
    this.counterService.inactiveCount(this.inactive);
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.active++;
    this.counterService.activeCount(this.active);
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
