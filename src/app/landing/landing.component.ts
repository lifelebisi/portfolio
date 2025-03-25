import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactComponent } from "../contact/contact.component";


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavbarComponent, SkillsComponent, ProjectsComponent, ContactComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
