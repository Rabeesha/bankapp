import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-deleteconfirmation',
  templateUrl: './deleteconfirmation.component.html',
  styleUrls: ['./deleteconfirmation.component.css']
})
export class DeleteconfirmationComponent implements OnInit {
@Input() item:string|undefined //parent to child
@Output() onDelete = new EventEmitter() // child to parent-  
//evnt emiter used to genertaing userdefindevent
@Output() onCancel = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  delete(){
this.onDelete.emit(this.item)
  }
cancel(){
  this.onCancel.emit()
  
}
}
