import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  newProfile: any = {};
  profiles: any[] | undefined;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.loadProfiles();
  }

  loadProfiles() {
    this.profiles = this.profileService.getProfiles();
  }

  addProfile() {
    this.profileService.addProfile(this.newProfile);
    this.newProfile = {}; // Clear the form
    this.loadProfiles(); // Reload the profile list
  }

  editProfile(profile: any) {
    // Implement edit functionality here
    // You can open a modal or a form for editing
  }

  deleteProfile(profile: any) {
    this.profileService.deleteProfile(profile.id);
    this.loadProfiles(); // Reload the profile list
  }
}
