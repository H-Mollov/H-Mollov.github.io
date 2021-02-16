import { Component } from '@angular/core';
import * as database from '../database/data.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  constructor() { }

  focusedProject;
  focusedProjectStyle: String = 'display: none';

  allProjects: Array<any> = database.projects;
  projects: Array<any> = this.allProjects;

  showProjectDetails(event): void {
    this.focusedProject = this.projects.find(el => el.name === event.target.children[0].textContent);
    this.focusedProjectStyle = 'display: flex';
  }

  hideProjectDetails(): void {
    this.focusedProjectStyle = "display: none";
  }

  displayCategory(category): void {
    if (category === 'all') {
      this.projects = this.allProjects;
    } else {
      this.projects = this.allProjects.filter(el => el.category === category);
    }
  }
}
