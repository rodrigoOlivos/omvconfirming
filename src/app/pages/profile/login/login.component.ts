import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-old',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginOldComponent implements OnInit {

  reactiveForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.reactiveForm = this.formBuilder.group({
      rutempresa: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      rutpersona: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      clave:      new FormControl(null, [Validators.required, Validators.minLength(3)]),
    });
  }

  // form = new FormGroup({
  // })
  //
  // tslint:disable-next-line:typedef
  get f() {
    return this.reactiveForm.controls;
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    if (this.reactiveForm.invalid) {
      return;
    }

    if (this.reactiveForm.value.rutempresa === '123' && this.reactiveForm.value.rutpersona === '123' && this.reactiveForm.value.clave === '123') {
      this.router.navigate(['/inicio']);
    }
  }

  ngOnInit(): void {
  }

}
