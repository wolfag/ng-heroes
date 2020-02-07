import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  formSignup: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    /** case 1 */
    // this.formSignup = new FormGroup({
    //   email: new FormControl('wolfag@gmail.com'),
    //   password: new FormControl(),
    //   subject: new FormGroup({
    //     nodejs: new FormControl(true),
    //     angular: new FormControl(true),
    //     reactjs: new FormControl(false)
    //   })
    // })

    /** case 2 */
    this.formSignup = this.fb.group({
      email: ['', [Validators.required, Validators.email, gmailValidator]],
      password: '',
      subject: this.fb.group({
        nodejs: true,
        angular: true,
        reactjs: false
      })
    })

  }

  signup() {
    console.log('signup', this.formSignup.value)
  }

}

function gmailValidator(formControl: FormControl) {
  if (formControl.value.includes('@gmail.com')) {
    return null;
  } else {
    return { gmail: true };
  }
}