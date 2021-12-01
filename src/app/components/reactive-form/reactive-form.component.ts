import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAllAnswer } from 'src/app/models/answers.model';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  answer: IAllAnswer = {
    firstAnswer: "Remember me",
    secondAsnwer: "Remember me",
    thirdAnswer: "Remember me",
  }

  formTest = new FormGroup({
    answerOne: new FormControl('', Validators.required)
  });

  formTest2 = new FormGroup({
    answerTwo: new FormControl('', Validators.required)
  });

  formTest3 = new FormGroup({
    answerThree: new FormControl('', Validators.required)
  })


  animalControl1 = this.formTest.controls['anserOne'].value;
  animalControl2 = this.formTest2.controls['answerTwo'].value;
  animalControl3 = this.formTest3.controls['answerThree'].value;

  constructor() { }

  ngOnInit(): void {
    this.formTest.valueChanges.subscribe(values => console.log(values));
    this.formTest2.valueChanges.subscribe(values => console.log(values));
    this.formTest3.valueChanges.subscribe(values => console.log(values));
  }

}
