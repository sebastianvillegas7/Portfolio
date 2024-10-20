import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  activeProject: number | null = null;

  showProject(projectId: number) {
    this.activeProject = projectId;
  }
}
