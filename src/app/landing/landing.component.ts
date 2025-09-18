
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Github, Linkedin, ChevronDown, Code, Terminal, Sparkles, Heart } from 'lucide-angular';
import { NavbarComponent } from "../navbar/navbar.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,NavbarComponent, SkillsComponent, ProjectsComponent, ContactComponent,LucideAngularModule, ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly ChevronDown = ChevronDown;
  readonly Code = Code;
  readonly Terminal = Terminal;
  readonly Sparkles = Sparkles;
  readonly Heart = Heart;

  currentText = '';
  showMainContent = false;
  showDescription = false;
  showSocials = false;
  showScrollIndicator = false;

  private timeoutId: any;

  techStack = ['Angular', 'TypeScript', 'Node.js', 'Java', 'PostgreSQL', 'Springboot'];

  ngOnInit() {
    this.startTypewriterEffect();
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private startTypewriterEffect() {
    const firstPhrase = "Full-stack developer";
    const secondPhrase = "Hi, I'm Life Lebisi";
    let index = 0;
    let isFirstPhase = true;

    const type = () => {
      if (isFirstPhase) {
        if (index < firstPhrase.length) {
          this.currentText = firstPhrase.slice(0, index + 1);
          index++;
          this.timeoutId = setTimeout(type, 150);
        } else {
          this.timeoutId = setTimeout(() => {
            this.currentText = '';
            index = 0;
            isFirstPhase = false;
            this.timeoutId = setTimeout(type, 500);
          }, 2000);
        }
      } else {
        if (index < secondPhrase.length) {
          this.currentText = secondPhrase.slice(0, index + 1);
          index++;
          this.timeoutId = setTimeout(type, 100);
        } else {
          setTimeout(() => {
            this.showMainContent = true;
            setTimeout(() => this.showDescription = true, 600);
            setTimeout(() => this.showSocials = true, 1200);
            setTimeout(() => this.showScrollIndicator = true, 1800);
          }, 800);
        }
      }
    };

    this.timeoutId = setTimeout(type, 1000);
  }

  scrollToProjects() {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  onImageError(event: any) {
    const img = event.target;
    const span = img.nextElementSibling;
    img.style.display = 'none';
    span.classList.remove('hidden');
    span.classList.add('flex');
  }
}
