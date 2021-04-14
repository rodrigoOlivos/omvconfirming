import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  reactiveForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private router:Router) {
    this.reactiveForm = this.formBuilder.group({
      rutempresa: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      rutpersona: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      clave: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    });
  }

  // form = new FormGroup({
  // })
  //
  get f() {
    return this.reactiveForm.controls;
  }

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
