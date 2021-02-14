import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './core/home/home.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { CoreService } from './core/core.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [
    AppComponent, 
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent
  ]
})
export class AppModule { }
