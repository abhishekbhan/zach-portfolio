import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = "Zach's Portfolio";

  constructor() { }
  ngOnInit() {
    console.log('App loaded!');
  }
  goToSection(event, section) {
    event.stopPropagation();
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
  }
}
