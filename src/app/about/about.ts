import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
dark:boolean=true
toggletheme(){
  this.dark=!this.dark
}
}
