import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  navOptions = [
    { label: 'About', path: 'about' },
    { label: 'Blog', path: 'blog' },
    { label: 'Contact', path: 'contact' },
  ];
}
