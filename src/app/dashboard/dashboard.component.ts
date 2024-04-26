import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { LayoutComponent } from '../../layout/app-layout.component';
import { ProfileComponent } from '../profile/profile.component';
import { AchievementsComponent } from '../achievements/achievements.component';
import { ReputationComponent } from '../reputation/reputation.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { CommunitiesComponent } from '../communities/communities.component';
import { TestemonialsComponent } from '../testemonials/testemonials.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [
    RouterModule,
    LayoutComponent,
    ProfileComponent,
    AchievementsComponent,
    ReputationComponent,
    AboutMeComponent,
    CommunitiesComponent,
    TestemonialsComponent,
  ],
})
export class DashboardComponent {
  title = 'dashboard';
}
