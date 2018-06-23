import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild("f") subscriptionForm: NgForm;
  sub = "advanced";

  onSubmit(form: NgForm) {
      console.log(form['form'].value);
  }

  ngOnInit() {
    /*this.subscriptionForm.form.setValue({
      subscription: "pro"
    });*/

    /*this.subscriptionForm.form.patchValue({
      subscription: "pro"
    });*/
  }
}
