import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  selectedProject: number = 1;

  showProject(projectNumber: number): void {
    this.selectedProject = projectNumber;
  }
}
