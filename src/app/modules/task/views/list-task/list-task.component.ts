import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Cityzen } from 'src/app/modules/cityzen/models/cityzen.model';
import { CityzenService } from 'src/app/modules/cityzen/service/cityzen.service';
import { Task } from '../../models/task.model';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {

  id : string = '';
  day : number = 0;
  selectedValue: string="";
  tasks: Task[] = [];
  days: any[] = [
    {value: 1, description: 'Lunes'},
    {value: 2,description: 'Martes'},
    {value: 3 ,description: 'Miercoles'},
    {value: 4 ,description: 'jueves'},
    {value: 5 ,description: 'Viernes'},
    {value: 6 ,description: 'Sabado'},
    {value: 7, description: 'Domingo'}, 
  ];

  cityzen: Cityzen = {
    id:0,
    email:'',
    firstName: '',
    lastName : '',  
    status : false,
  } ; 

  task: Task = {
    id:0, 
    description: '', 
    citizenId : this.cityzen.id,
    day : this.day,
    month : new Date().getMonth(),
    year : new Date().getFullYear(),
    status :true
  } ; 


  constructor(private cityzenService: CityzenService,
    private taskService : TaskService,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar) { 

    this.id = this.route.snapshot.paramMap.get('id') || ''  ;
    if (this.id) {
      this.task.citizenId  = parseInt(this.id );
      this.getCityzenById(parseInt(this.id ));
      this.getTasksByCityzen(parseInt(this.id));
       
    }
  }

  ngOnInit(): void {
  }

  getTasksByCityzen(id:number):void{
    this.taskService.getTasksByCityzen(id)
    .subscribe((res: any) => {    4
      this.tasks = res;
    }, err => { 

    });

  }

  getCityzenById(id:number):void{
    this.cityzen = this.cityzenService.getCityzenStorageById(id) ;

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  process() : void {
    debugger
    if (this.task.description!=null && this.task.description !="" 
    && this.task.day!=null && this.task.day > 0) {

   this.taskService.addTask(this.task)
   .subscribe((res: any) => {   
     this.getTasksByCityzen(this.cityzen.id);
    this.openSnackBar("Creado Correctamente","create");
  }, err => { 
  });
     
  }
  else {
    this.openSnackBar("Por favor ingrese todos los campos","Error");
  }


 

  }

}
