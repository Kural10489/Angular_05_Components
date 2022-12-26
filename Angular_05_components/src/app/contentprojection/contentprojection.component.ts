import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-contentprojection',
  templateUrl: './contentprojection.component.html',
  styleUrls: ['./contentprojection.component.scss']
})
export class ContentprojectionComponent {

  @Input() public array:any[];
}
