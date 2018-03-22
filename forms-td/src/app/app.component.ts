import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion: string = 'pet';
  answer: string = '';
  genders = ['male', 'female'];
  selectedGender = "male";

  user = {
    username: '',
    email: '',
    question: '',
    answer: '',
    gender: ''
  };

  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });

    /*this.signupForm.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male'
    });*/

  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    this.user.username = form.value.userData.username;
    this.user.email = form.value.userData.email;
    this.user.question = form.value.secret;
    this.user.answer = form.value.questionAnswer;
    this.user.gender = form.value.gender;
    console.log(this.user);
    //console.log(form);
  }

}
