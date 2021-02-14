import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { CoreService } from './core.service';



@NgModule({
  declarations: [
    NavigationComponent, 
    HomeComponent],
  imports: [
    CommonModule
  ],
  providers: [
    CoreService
  ]
})
export class CoreModule { }
