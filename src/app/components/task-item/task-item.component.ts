import { Component ,Input, Output,EventEmitter} from '@angular/core';
import { faTimes} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task :any;
  @Output() onDeleteTask : EventEmitter<any> = new EventEmitter();

  @Output() onToggleReminder : EventEmitter<any> = new EventEmitter();

  faTimes = faTimes;

  delete(task:any){
    this.onDeleteTask.emit(task)
  }

  onToggle(task:any){
    this.onToggleReminder.emit(task)
  }


}
