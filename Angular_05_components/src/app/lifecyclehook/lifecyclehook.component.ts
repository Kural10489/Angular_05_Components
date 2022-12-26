import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges ,Output, EventEmitter} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-lifecyclehook',
  templateUrl: './lifecyclehook.component.html',
  styleUrls: ['./lifecyclehook.component.scss']
})
export class LifecyclehookComponent implements OnInit,OnDestroy,OnChanges{

public counter=0;
public interval:any;

@Input()
public onchangename="";

constructor(){
console.log("Child class");

}
ngOnInit(): void {
  console.log("OnInit child");
  this.interval=setInterval(()=>{
    this.counter=this.counter+1;
    console.log(this.counter);
  },1000);

}
//Both Constructer and ngOnInit called whenever the browser loaded
ngOnDestroy(): void {
  clearInterval(this.interval)
  console.log(" Component Destroyed");

}
ngOnChanges(): void {
  console.log("Child component changed");

}

@Output()
public output=new EventEmitter<string>();
greet(){
this.output.emit('I am from child compon');
}
}
