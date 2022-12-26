import { Component, ViewEncapsulation ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-none',
  templateUrl: './none.component.html',
  styleUrls: ['./none.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class NoneComponent {
  @Output()
  public output=new EventEmitter<string>();
  greet(){
  this.output.emit('I am from child compon');
  }
  }

