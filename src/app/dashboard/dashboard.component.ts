import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { LayoutComponent } from '../../layout/app-layout.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [RouterModule, LayoutComponent, ProfileComponent],
})
export class DashboardComponent {
  title = 'dashboard';
}
