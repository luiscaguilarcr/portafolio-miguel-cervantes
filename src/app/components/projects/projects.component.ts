import { Component } from '@angular/core';
import {  Project } from '../data/project'
import {  projects } from '../data/data'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [];

  constructor() { }

  ngOnInit(): void { 
    this.projects = projects;
  }
}
