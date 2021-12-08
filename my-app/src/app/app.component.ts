import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  name="Nandini S";
  getName(){
    // return "Nandu";
    return this.name;
  }
  arr=[1,2,3,4];
  person={
    fname:"Shiva",
    lname:"Kumar",
    age:50
  }
  Y=true;
  sum=(a:number,b:number,c:number)=>{return a+b+c;}
  num=(a:number,b:number,c:number)=>{return `${a} ${b} ${c}`;}
}
