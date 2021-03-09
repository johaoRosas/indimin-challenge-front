import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cityzen } from '../../models/cityzen.model';
import { CityzenService } from '../../service/cityzen.service';

@Component({
  selector: 'app-list-cityzen',
  templateUrl: './list-cityzen.component.html',
  styleUrls: ['./list-cityzen.component.scss']
})
export class ListCityzenComponent implements OnInit {
 
  cityzen : string = "";
  cityzens: Cityzen[] = []; 
  cityzens_search: Cityzen[] = []; 
  isLoadingResults :boolean=  true;
  constructor(private cityzenService: CityzenService,
    private router: Router) {  
      this.getAll();
    }

  ngOnInit(): void {  
      this.getAll();
    
    
  }

  goToTask(cityzen:Cityzen) :void {
    this.router.navigate(['/task/list/'+cityzen.id]);
  }

  goToupdate(cityzen:Cityzen) :void {
    this.router.navigate(['/cityzen/update/'+cityzen.id]);

  }

  getAll() :void {
    this.cityzenService.getCityzen()
    .subscribe((res: any) => {  
      this.cityzens = res;
      this.cityzens_search = res;
      this.cityzenService.setAgencyStorage(this.cityzens);
      this.isLoadingResults = false;

    }, err => {
      this.isLoadingResults = false;
    });
  }


  delete(id:number) :void {
    this.cityzenService.deleteCityzen(id)
    .subscribe((res: any) => {   
      this.isLoadingResults = false;
      this.getAll();
    }, err => {
      this.isLoadingResults = false;
    });
  }

  changeStatus(cityzen:Cityzen,index:number) : void{

  // this.cityzens =  this.cityzenService.updateStatusCityzen(cityzen,index);
  }

  applyFilter() {    
    this.cityzens = this.cityzens_search.filter(element => 
      element.email.toLowerCase().includes(this.cityzen.toLowerCase()) ||
      element.firstName.toLowerCase().includes(this.cityzen.toLowerCase()) ||
      element.lastName.toLowerCase().includes(this.cityzen.toLowerCase())  
      
      );
  
  }

  openCreate(){
    this.router.navigate(['/cityzen/create/']);
  }
}
