import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {ProjectService} from './projects/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = "Zach's Portfolio";

  constructor(private projectService: ProjectService) {
  }
  ngOnInit() {
    console.log('App loaded!');

    $('.navbar-toggler').on('click', function() {
      $('.navbar-collapse').toggleClass('show');
    })
  }
  goToSection(event, section) {
    event.stopPropagation();
    this.projectService.setProjectView(false);

    setTimeout(() => {
      let sectionId = 'project-section';
      let offset = 60;
      if (section === 'ABOUT_ME') {
        sectionId = 'my-info-section';
      } else if (section === 'CONTACT') {
        sectionId = 'footer-contact';
      }
      $('html, body').animate({
        scrollTop: $('#' + sectionId).offset().top - offset
      }, 1000);
    },100) ;
  }
}
