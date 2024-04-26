import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from '../../../layout/app-layout.component';
import { CommuniteBannerComponent } from '../../components/communite-banner/communite-banner.component';
import { PostsComponent } from '../../components/posts/posts.component';
import { InformationComponent } from '../../components/information/information.component';

@Component({
  selector: 'app-community',
  standalone: true,
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss',
  imports: [
    RouterModule,
    LayoutComponent,
    CommuniteBannerComponent,
    PostsComponent,
    InformationComponent,
  ],
})
export class CommunityComponent {
  title = 'community';
}
