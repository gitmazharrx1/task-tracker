import { Component } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks : Task[]= [];

  constructor(private taskService:TaskService){}

  ngOnInit():void{
    this.taskService.taskservice().subscribe((tasks)=>(this.tasks=tasks))
  }

  deletetask(task :any){
    this.taskService.deletetask(task).subscribe(()=>(this.tasks = this.tasks.filter((t)=>t.id !==task.id)))
  }

  toogleReminder(task:any){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe()
  }
}
