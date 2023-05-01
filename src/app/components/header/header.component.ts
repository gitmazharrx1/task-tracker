import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title : string = 'Task Tracker';
  showAddTask :any =false;
  subscription : Subscription;

  constructor (private uiService:UiService , private router:Router){
    this.subscription = this.uiService.onToogle().subscribe(value =>(this.showAddTask = value))
  }

  addTask(){
    this.uiService.toggleAddTask()
  }
  hasroute(route: string){
    return this.router.url === route;
  }
}
