import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-new';
  getName(name){
    // console.log(name);
    return name;
  }
  btn(par){
    console.log(par);
    return par;
  }
  MyEvent(txt){
    console.log(txt);
    return txt;
  }
  MyEvent2(txt1){
    console.log(txt1);
    return txt1;
  }
  MyEvent3(txt2){
    console.log(txt2);
      return txt2;}
}
