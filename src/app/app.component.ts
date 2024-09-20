import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'llm_notebook';
  isSidebarOpen = true; // Initial state: sidebar is open

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}

