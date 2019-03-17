import { Component, OnInit } from '@angular/core';
import {ProjectService} from './project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  private projects: Array<any> = [];

  constructor(public projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  openProject(project: any) {
    this.openProject = project;
  }

  scrollDown(e) {
    e.stopPropagation();
    $('html, body').animate({
      scrollTop: $('#project-section').offset().top - 60
    }, 1000);
  }

}
