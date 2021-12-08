import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day10-Project';
  name="Nandini";
  disabledBox=true;
  disabledBox1=true;
  placename="disabled";
  enableInput(){
    this.disabledBox=false;
  
  }
  enableInput1(){
    this.disabledBox1=false;
    this.placename="name";
  }

  //day=false;
  day=true;
  choice=1;

  names=["name1","name2","name3"];
  details=[
    {fname:"Neel",
      age:20},
      {
        fname:"Keil",
        age:32
      },
      {
        fname:"Den",
        age:31
      }
  ]
}
