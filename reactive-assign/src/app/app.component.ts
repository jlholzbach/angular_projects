import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    form: FormGroup;

    ngOnInit() {
      this.form = new FormGroup({
        project_name: new FormControl(null, [Validators.required], this.forbiddenProjectNameAsync),
        email: new FormControl(null, [Validators.required, Validators.email]),
        status: new FormControl(null)
      });
    }

    forbiddenProjectName(control: FormControl):{[s: string]: boolean} {
      if (control.value == "Test") {
        return {"nameIsForbidden": true};
      }
    }

    forbiddenProjectNameAsync(control: FormControl): Promise<any> | Observable<any> {
      const promise = new Promise<any>((resolve, reject) => {
        setTimeout(() => {
          if (control.value == "Test") {
            resolve({"nameIsForbidden": true});
          }

          else {
            resolve(null);
          }
        },1500);
      })

      return promise;
    }

    onSubmit() {
      console.log(this.form.value);
    }
}
