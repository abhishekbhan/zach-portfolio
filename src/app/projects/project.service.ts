import { Injectable } from '@angular/core';
// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ProjectService {
  projects: Array<any> = [];
  constructor() {}
  getProjects() {
    this.projects = this.projects = [
      {
        id: 1,
        projectTitle: 'zach first porject',
        imageUrl: '/assets/images/dummy.png'
      },
      {
        id: 2,
        projectTitle: 'Project 2',
        imageUrl: '/assets/images/dummy.png'
      },
      {
        id: 3,
        projectTitle: 'Project 3',
        imageUrl: '/assets/images/dummy.png'
      },
      {
        id: 4,
        projectTitle: 'Project 4',
        imageUrl: '/assets/images/dummy.png'
      },
      {
        id: 5,
        projectTitle: 'Project 5',
        imageUrl: '/assets/images/dummy.png'
      },
      {
        id: 6,
        projectTitle: 'Project 5',
        imageUrl: '/assets/images/dummy.png'
      }
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
