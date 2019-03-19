import { Component, OnInit } from '@angular/core';
import {ProjectService} from './project.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  private projects: Array<any> = [];
  private selectedProject: any;

  constructor(public projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  openProject(project: any) {
    this.selectedProject = project;
    this.scrollToTop();
  }

  scrollDown(e) {
    e.stopPropagation();
    $('html, body').animate({
      scrollTop: $('#project-section').offset().top - 60
    }, 1000);
  }

  hasPrevious(project) {
    let prevProjectId = 0;
    if(project.id > 1) {
      return true;
    } else {
      return false;
    }
  }

  hasNext(project) {
    let prevProjectId = 0;
    if (project.id !== (this.projects)[this.projects.length - 1].id) {
      return true;
    } else {
      return false;
    }
  }

  openNextProject(project) {
    let newProjectId = project.id + 1;
    this.selectedProject = this.projectService.getProjectById(newProjectId);
    this.scrollToTop();
  }

  openPrevProject(project) {
    let newProjectId = project.id - 1;
    this.selectedProject = this.projectService.getProjectById(newProjectId);
    this.scrollToTop();
  }

  scrollToTop() {
    $('html, body').animate({
      scrollTop: $('body').offset().top - 60
    }, 500);
  }

  closeSelectedProject() {
    this.selectedProject = null;
    this.scrollToTop();
  }


}
