import { Component ,Output,EventEmitter} from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask : EventEmitter<any> = new EventEmitter();

  text : any;
  day :any;
  reminder : any = false;
  showAddTask:any;
  subscription : Subscription;

  constructor(private uiService : UiService){
    this.subscription = this.uiService.onToogle().subscribe(value =>(this.showAddTask = value))
  }

  submit(){
    if(!this.text){
      alert('Please Enter Text');
      return
    }

    const newTask ={
      text: this.text,
      day: this.day,
      reminder:this.reminder,
    }

    this.onAddTask.emit(newTask);

    this.text ='';
    this.day ='';
    this.reminder =false;
  }

}
