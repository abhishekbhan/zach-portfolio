import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ProjectService {
  projects: Array<any> = [];
  projectView: BehaviorSubject<any> = new BehaviorSubject(false);

  constructor() {
  }
  setProjectView(projectView) {
    this.projectView.next(projectView);
  }
  getProjects() {
    this.projects = [
      {
        id: 1,
        projectTitle: 'GarageSale',
        imageUrl: '/assets/images/garageSaleSquare.jpg'
      },
      {
        id: 2,
        projectTitle: 'Nest Transport',
        imageUrl: '/assets/images/nestTransport.svg'
      },
      {
        id: 3,
        projectTitle: 'Sushi Landing Page',
        imageUrl: '/assets/images/sushiLandingsq.png'
      },
      {
        id: 4,
        projectTitle: 'Credit Card Checkout',
        imageUrl: '/assets/images/ccCheckoutSquare.jpg'
      },
      {
        id: 5,
        projectTitle: 'Illustrations',
        imageUrl: '/assets/images/dragonfruit.svg'
      },

    ];
    return this.projects;
  }
  getProjectById(id) {
    let projects = this.projects;
    for(let project of projects) {
      if (project.id === id) {
        return project;
      }
    }
    return null;
  }
}
//page to add/edit project amounts and titles
