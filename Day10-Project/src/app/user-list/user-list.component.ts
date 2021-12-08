import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  template: `
  <h1>Hey template works</h1>
  <h2>{{name}}</h2>
  
  
  <div class="mainbox">
  <div class="box">
  <div>
    <h1>Employee Interests Survey Form</h1></div><br>
    <form action="">
    <div>
        <label for="">Enter your name:</label>
        <input type="text">
        </div><br>
        <div>
        <label for="">Enter your department:</label>
        <input type="text">
        </div><br>
        <div>
        <label for="">Tell us little about yourself:</label>
        <input type="text">
        </div><br>
        <div>
        <label for="">Do you exercise at home?</label>
        <span> <input type="radio" class="radio"><label for="option1">Yes</label>
         <input type="radio" class="radio">
        <label for="option2">No</label></span>
        </div><br>
        <div>
    <div>How do you like to read about your favorite topics?</div>
    <input type="checkbox" class="check"><label for="">Books</label>
    <input type="checkbox" class="check">
    <label for="">Online Resources</label>
    <input type="checkbox" class="check"><label for="">Phone Apps</label>
    <input type="checkbox" class="check"><label for="">Magazines</label>
        </div><br>
        <div><label for="">What genre of movies do you like?</label>
        <select>
<option value = "comedy"> Comedy 
</option>
<option value = "Horror"> Horror 
</option>
<option value = "Thriller"> Thriller
</option>
<option value = "Action"> Action
</option>
</select>
        </div><br>
        <div><button>Submit form</button></div>
    </form>
    </div>
</div>`,
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name="nandini";

}
