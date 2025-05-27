// app.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '3D Environmental Services';
  isNavOpen = false;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
    const icon = document.querySelector('.mobile-nav-toggle i');
    if (icon) {
      icon.className = this.isNavOpen ? 'fas fa-times' : 'fas fa-bars';
    }
  }

  closeNav() {
    this.isNavOpen = false;
    const icon = document.querySelector('.mobile-nav-toggle i');
    if (icon) {
      icon.className = 'fas fa-bars';
    }
  }
}
