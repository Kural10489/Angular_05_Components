import { Component, OnChanges, OnDestroy, OnInit,Input, ViewEncapsulation, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit,OnChanges{
  public child=false;
  public onchangename:string;
  private InputName:string;
  public Phone=[
  {id:1,name:'iphone',productImage:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRLouV3XpqfKaDer8WTZBftzLyWdonirK4npXBGLyn88ltGh-LOnXOUIiqZnmvhvaEgibAdnb4o9aaVYUPsqhQrcm43DtSUbQ",price:300},
  {id:2,name:'Samsung',productImage:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRLouV3XpqfKaDer8WTZBftzLyWdonirK4npXBGLyn88ltGh-LOnXOUIiqZnmvhvaEgibAdnb4o9aaVYUPsqhQrcm43DtSUbQ",price:300},
  {id:3,name:'Real Me',productImage:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRLouV3XpqfKaDer8WTZBftzLyWdonirK4npXBGLyn88ltGh-LOnXOUIiqZnmvhvaEgibAdnb4o9aaVYUPsqhQrcm43DtSUbQ",price:300},
  {id:4,name:'Micromax',productImage:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRLouV3XpqfKaDer8WTZBftzLyWdonirK4npXBGLyn88ltGh-LOnXOUIiqZnmvhvaEgibAdnb4o9aaVYUPsqhQrcm43DtSUbQ",price:300}]

  constructor(){
  console.log("Parent class");
  }



  ngOnInit(): void {
    console.log(" Parent OnInit");
  }
  ngOnChanges(): void {
    console.log("Parent component changed");
  }
  toggle(){
    this.child=!this.child;
  }

  //Accessing a private variable using get/set methods
  get username():string{
    return this.InputName;
  }
  set username(value:string){
    this.InputName=value;
    if(value==='kural'){
      alert('Welcome Back Kural!!!!');
    }
  }

  @Output() public Parentoutput='';

}
