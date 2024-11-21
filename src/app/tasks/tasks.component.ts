import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',  
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})


export class TasksComponent {
  @Input({required: true}) userId!: string; 
  @Input() name?: string;

  isAddingTask = false;

  /**
   *
   */
  constructor(private tasksService: TasksService) { }
  
  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId)
  }
  onComplateTask(id: string){
    this.tasksService.removeTask(id);
  }
  onStartAddTask(){
    this.isAddingTask = true;
  }
  onCloseAddTask(){
    this.isAddingTask=false;
  }

}