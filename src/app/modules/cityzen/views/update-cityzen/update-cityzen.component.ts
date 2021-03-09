import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Cityzen } from '../../models/cityzen.model';
import { CityzenService } from '../../service/cityzen.service';

@Component({
  selector: 'app-update-cityzen',
  templateUrl: './update-cityzen.component.html',
  styleUrls: ['./update-cityzen.component.scss']
})
export class UpdateCityzenComponent implements OnInit {

  id : string = '';

  cityzen: Cityzen = {
    id:0,
    email:'',
    firstName: '',
    lastName : '',  
    status : false,
  } ; 

  constructor(private cityzenService: CityzenService,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar) {

      this.id = this.route.snapshot.paramMap.get('id') || ''  ;
      if (this.id) {
        this.getCityzenById(parseInt(this.id ) );
      }
     

     }

     openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action, {
        duration: 2000,
      });
    }

    getCityzenById(id:number):void{
    this.cityzen = this.cityzenService.getCityzenStorageById(id) ;

  }

  ngOnInit(): void {
  }

  process() : void {

    if (this.cityzen) {
      if (this.cityzen.email!=null && this.cityzen.email!="" 
        && this.cityzen.firstName!=null && this.cityzen.firstName!=""
        && this.cityzen.lastName!=null && this.cityzen.lastName!="" 
      ) {
        this.cityzenService.updateCityzen( this.cityzen.id,this.cityzen )
        .subscribe((res: any) => {   
          this.openSnackBar("Actualizado Correctamente","Update");
        }, err => { 
        });
     
        
      }
      else {
        this.openSnackBar("Por favor ingrese todos los campos","Error");
      }
    }

  
    //this.goToList();

  }

  goToList() :void {
    this.router.navigate(['/cityzen/list/']);
  }

}
