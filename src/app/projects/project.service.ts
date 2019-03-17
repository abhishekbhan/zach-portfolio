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
        projectTitle: 'This is the title',
        imageUrl: '/assets/images/dummy.png'
      },
      {
        id: 2,
        projectTitle: 'This is the title',
        imageUrl: '/assets/images/dummy.png'
      },
      {
        id: 3,
        projectTitle: 'This is the title',
        imageUrl: '/assets/images/dummy.png'
      },
      {
        id: 4,
        projectTitle: 'This is the title',
        imageUrl: '/assets/images/dummy.png'
      },
      {
        id: 5,
        projectTitle: 'This is the title',
        imageUrl: '/assets/images/dummy.png'
      },
      {
        id: 6,
        projectTitle: 'This is the title',
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
