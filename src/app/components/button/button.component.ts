import { Component ,Input ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() color:any;
  @Input() text : any;
  @Output() btnclick :any = new EventEmitter
  onclick(){
    this.btnclick.emit()
  }
}
