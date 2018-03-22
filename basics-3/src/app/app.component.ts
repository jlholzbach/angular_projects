import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  displayDetails = false;
  buttonText = "Display details";
  clicks = [];

  getBackground(i) {
    if (i >= 4) {
      return 'blue';
    }
  }

  getColor(i) {
    if (i >= 4) {
      return 'white';
    }
  }

  onDisplay() {
    //this.clicks.push(Date.now());
    this.clicks.push(new Date());
    this.displayDetails = !this.displayDetails;

    if (this.displayDetails == true) {
      //this.displayDetails = false;
      this.buttonText = "Display details";
    }

    else {
      //this.displayDetails = true;
      this.buttonText = "Hide details";
    }

  }

}
