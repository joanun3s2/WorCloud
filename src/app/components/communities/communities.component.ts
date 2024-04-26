import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-communities',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './communities.component.html',
  styleUrl: './communities.component.scss',
})
export class CommunitiesComponent {}
