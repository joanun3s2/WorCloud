import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { LayoutComponent } from '../../../layout/app-layout.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { AchievementsComponent } from '../../components/achievements/achievements.component';
import { ReputationComponent } from '../../components/reputation/reputation.component';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { CommunitiesComponent } from '../../components/communities/communities.component';
import { TestemonialsComponent } from '../../components/testemonials/testemonials.component';

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
