import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  submitted = false;
  fname;
  lname;
  phonenum;
  mail;

  infoForm = this.builder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    phone: ['', Validators.pattern('[(]{0,1}[1-9]{1}\\d{2}[)]{0,1}[-\\s]{0,1}[1-9]{1}\\d{2}[-\\s]{0,1}\\d{4}')],
    email: ['', Validators.email]
  });

  get firstname(): AbstractControl { return this.infoForm.get('firstname'); }
  get lastname(): AbstractControl { return this.infoForm.get('lastname'); }
  get phone(): AbstractControl { return this.infoForm.get('phone'); }
  get email(): AbstractControl { return this.infoForm.get('email'); }

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
    this.fname = this.firstname.value;
    this.lname = this.lastname.value;
    this.phonenum = this.phone.value;
    this.mail = this.email.value;
    this.infoForm.reset();
  }

}
