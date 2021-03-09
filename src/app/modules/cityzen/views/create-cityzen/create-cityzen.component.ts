import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {  Cityzen } from '../../models/cityzen.model';
import { CityzenService } from '../../service/cityzen.service';

@Component({
  selector: 'app-create-cityzen',
  templateUrl: './create-cityzen.component.html',
  styleUrls: ['./create-cityzen.component.scss']
})
export class CreateCityzenComponent implements OnInit {

  constructor(private cityzenService: CityzenService,
    private router: Router,
    private _snackBar: MatSnackBar) { }
  index : string = '';

   

  cityzen: Cityzen = {
    id : 0,
    email:'',
    firstName: '',
    lastName : '',  
    status : false,
  } ; 

  process() : void {

    if (this.cityzen.email!=null && this.cityzen.email!="" 
    && this.cityzen.firstName!=null && this.cityzen.firstName!=""
    && this.cityzen.lastName!=null && this.cityzen.lastName!="" 
  ) {

   this.cityzenService.addCityzen(this.cityzen)
   .subscribe((res: any) => {   
    this.openSnackBar("Creado Correctamente","create");
  }, err => { 
  });
     
  }
  else {
    this.openSnackBar("Por favor ingrese todos los campos","Error");
  }


 

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }


  ngOnInit(): void {
  }

}
