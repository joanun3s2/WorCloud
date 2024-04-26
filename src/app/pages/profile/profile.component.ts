import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from '../../../layout/app-layout.component';
import { CommuniteBannerComponent } from '../../components/communite-banner/communite-banner.component';
import { PostsComponent } from '../../components/posts/posts.component';
import { InformationComponent } from '../../components/information/information.component';
import { ProfileTestComponent } from '../../components/profile-test/profile-test.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  imports: [RouterModule, LayoutComponent, ProfileTestComponent],
})
export class ProfilePageComponent {
  title = 'profile';
}
