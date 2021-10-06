import { animate, state,style,transition,trigger } from '@angular/animations';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-demo',
  templateUrl: './animation-demo.component.html',
  styleUrls: ['./animation-demo.component.css'],
  animations:[
    trigger('openClose',[
      state('open',style({
        height:'250px',
        backgroundColor:'red'

      })),
      state('close',style({
        height:'250px',
        backgroundColor:'green'

      })),
      transition('open=>Close',[
        animate('1s')
      ]),
      transition('Close=>open',[
        animate('2s')
      ]),
      
    ])
  ]
})
 
export class AnimationDemoComponent implements OnInit {
isopen=true;
  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
this.isopen=!this.isopen
  }

}
