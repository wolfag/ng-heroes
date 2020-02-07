import { Component, OnInit } from '@angular/core';

import { SignInService } from "../sign-in.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [SignInService]
})
export class SignInComponent implements OnInit {

  constructor(private signinService: SignInService) { }

  ngOnInit() {
  }

  signin(form) {
    this.signinService.sendPost(form.value)
      .then(res => console.log(res))
      .catch(e => console.log(e));
  }

}
