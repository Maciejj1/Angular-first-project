import { Component } from '@angular/core';
import {keyframes} from "@angular/animations";
import {config} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
