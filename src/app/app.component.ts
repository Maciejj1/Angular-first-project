import { Component } from '@angular/core';
import {keyframes} from "@angular/animations";
import {config} from "rxjs";
import {TASK} from './TASK'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // private eventHandler: ;
  // initListener(){
  //   const button = document.getElementById("listenerBtn")
  //   button.addEventListener("click", this.eventHandler) //EventHandler- klikniecie i wywołanie
  // }
  clearTasks(){
    this.tasks=[]; //BindowanieButtonów- Stworzenie Funkcji czyszczącej tablice
  }


createTask(name: string, deadline: string){
    const task: TASK = {
      name,
      deadline,
      done: false,
  };
    this.tasks.push(task)//Funkcja Tworząca Zadania i dodającą je do listy zadań
}
  tasks: TASK[]=[
    {
      name: 'Siłownia',
      deadline: '2002-01-02',
      done: false,
    },
    {
      name: 'Dupa',
      deadline: '2002-21-02',
      done: false,
    },
    {
      name: 'Prla',
      deadline: '2022-11-02',
      done: false,
    },
    {
      name: 'Kutas',
      deadline: '2001-11-12',
      done: false,
    },
  ]

//     initPropertyEvent(){
//     const button = document.getElementById("propertyEventBtn"); //ButtonBind- funkcja onclick tworząca wyskakujący alert
//
//        button.onclick = function (){
//       alert("Hello from Property Event!");
//       console.log("dupa")
//     }
// }
// config: { [key: string]: string | Date  }= null ; // QuestionMark - zamiast zwykłej interpolacji wszystkie dane przechowujemy w funkcji config

  // constructor() {
  //   setTimeout(()=>{//SetTimeout-Asynchorniecznie ustawiamy aby coś wywoływało się z opóźnieniem
  //     this.config={
  //       title: 'Lista Zadań',
  //       footer: 'Lista zadań zbudowana w Angularze',
  //       date: new Date()
  //     }
  //   }, 500)
  //
  // }
title = 'Lista Zadań';
 //getFooter(): string{ //Interpolacja - wywoływanie tekstu w komponencie html
 //  return '© Lista zadań,All rights reserved.'
// }
  // words = ['jeden', 'dwa','trzy']
  // num = 9.21234325324;
  // translate = {
  //   zima: 'winter',
  //   wiosna: 'spring',
  //   lato: 'summer',
  //   jesień: 'autumn',
  // };
  // price = 2.99;
 getDate(): Date{//Obiekt który wyświetla datę dynamicznie
     return new Date();
  }
footer = '2020 © Lista zadań,All rights reserved.'; //Interpolacja 2 - też działa , wywoływanie tekstu w komponencie html
}
