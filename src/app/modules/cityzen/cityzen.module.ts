import { NgModule } from '@angular/core';
import { CityzenPageRoutingModule  } from './cityzen.page.routing'
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListCityzenComponent } from './views/list-cityzen/list-cityzen.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {  MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SharedModule } from '../../shared/shared.module';
import { UpdateCityzenComponent } from './views/update-cityzen/update-cityzen.component';
import { CreateCityzenComponent } from './views/create-cityzen/create-cityzen.component';

@NgModule({
  declarations: [ListCityzenComponent, UpdateCityzenComponent, CreateCityzenComponent],
  imports: [
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    CityzenPageRoutingModule,
    SharedModule, 
  ]
})
export class CityzenModule { }
