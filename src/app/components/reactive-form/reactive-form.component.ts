import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAllAnswer } from 'src/app/models/answers.model';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  //Respuestas a capturar del usuario
  answer: IAllAnswer = {
    firstAnswer: "Remember me",
    secondAsnwer: "Remember me",
    thirdAnswer: "Remember me",
    total: 0,
  }

  //Respuestas esperadas
  rightAnswer = [{
    first: "Colacuerno Hungaro",
    second: "Thestral",
    third: "swooping evil",
  }];

  //Array de animales a consultar en formulario
  animals =[
    {
      alt: "Colacuerno Hungaro",
      src: "../../assets/dragon.jpg",
      pista: "Nativo de Hungría"
    },
    {
      alt: "Thestral",
      src: "../../assets/thestral.jpg",
      pista: "Invisibles para quienes no hayan presenciado la muerte"
    },
    {
      alt: "Swooping Evil",
      src: "../../assets/swooping-evil.png",
      pista: "Su veneno tiene propiedades olvidadizas"
    }
  ];


  //Tres formularios
  formTest = new FormGroup({
    answerOne: new FormControl('', Validators.required)
  });

  formTest2 = new FormGroup({
    answerTwo: new FormControl('', Validators.required)
  });

  formTest3 = new FormGroup({
    answerThree: new FormControl('', Validators.required)
  })


  //Controles para validar
  animalControl1 = this.formTest.controls['answerOne'];
  animalControl2 = this.formTest2.controls['answerTwo'];
  animalControl3 = this.formTest3.controls['answerThree'];

  constructor() { }

  //Controles para detectar cambios en tiempo real
  ngOnInit(): void {
    this.formTest.valueChanges.subscribe(values => console.log(values));
    this.formTest2.valueChanges.subscribe(values => console.log(values));
    this.formTest3.valueChanges.subscribe(values => console.log(values));
  }


  //boton confirmar del formulario
  confirm(){
    this.answer.firstAnswer = this.formTest.controls['answerOne'].value;
    this.answer.secondAsnwer = this.formTest2.controls['answerTwo'].value;
    this.answer.thirdAnswer = this.formTest3.controls['answerThree'].value;

    if (this.answer.firstAnswer == this.rightAnswer[0].first)   this.answer.total += 1;
    if (this.answer.secondAsnwer == this.rightAnswer[0].second)  this.answer.total += 1;
    if (this.answer.thirdAnswer.toLocaleLowerCase().trim() == this.rightAnswer[0].third) this.answer.total += 1;

    switch (this.answer.total){
      case 0:
        console.log('No ha asertado ninguna pregunta');
        break;
      case 1:
        console.log('Ha acertado una sola pregunta');
        break;
      case 2:
        console.log('Ha acertado dos preguntas');
        break;
      case 3:
        console.log('Ha acertado todas las preguntas');
        break;
    }

    if (this.answer.firstAnswer == '' || this.answer.firstAnswer == 'Selecciona una opción') alert('Debió seleccionar una opción en el dragón');
    if (this.answer.secondAsnwer == '') alert('Debió seleccionar una opción en el caballo');

    console.log('Las respuestas correctas eran: ' +
    '1) ' + this.rightAnswer[0].first +
    ' 2) ' + this.rightAnswer[0].second +
    ' 3) ' + this.rightAnswer[0].third)
  }

}
