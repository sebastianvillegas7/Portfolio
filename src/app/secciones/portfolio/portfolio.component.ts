import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  selectedProject: number = 1;

  tecnologias = [
    { src: '../../../assets/img/tecs/angular.png', alt: 'Angular' },
    { src: '../../../assets/img/tecs/material.png', alt: 'Angular Material' },
    { src: '../../../assets/img/tecs/SpringBoot.png', alt: 'Spring Boot' },
    { src: '../../../assets/img/tecs/oracle.png', alt: 'Oracle' },
    { src: '../../../assets/img/tecs/javascript.png', alt: 'JavaScript' },
    { src: '../../../assets/img/tecs/mysql.png', alt: 'MySQL' },
    { src: '../../../assets/img/tecs/vsc.png', alt: 'Visual Studio Code' },
    { src: '../../../assets/img/tecs/github.png', alt: 'GitHub' },
  ];

  showProject(projectNumber: number): void {
    this.selectedProject = projectNumber;
  }
}
