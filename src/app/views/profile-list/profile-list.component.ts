import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  profiles = [
    { name: 'Sanket Rangari', photo: 'assets/profile-photos/photo1.jpg', description: 'Have a Great Knowledge about HTMl,CSS. Also Intrested in JAVA.', address: 'New York, USA' },
    { name: 'Omkar Deshmukh', photo: 'assets/profile-photos/photo2.png', description: '5 Star Java Developer , Great knowledege about Agile', address: 'Los Angeles, USA' },
    { name: 'Shubham Deshmukh', photo: 'assets/profile-photos/photo3.jpg', description: 'Java Developer , Great knowledege about Backend Technologies', address: 'Los Angeles, USA' },
    { name: 'Ritesh Mangtani', photo: 'assets/profile-photos/photo4.jpg', description: '4th University Topper, Currently Patent Engineer at LegalForce', address: 'Los Angeles, USA' },
    { name: 'Krishna Gulhane', photo: 'assets/profile-photos/photo5.jpg', description: 'Studied at VIIT College , Currently Civil Engineer at JSW Steels', address: 'Los Angeles, USA' },
    { name: 'Aniket Dhakate', photo: 'assets/profile-photos/photo6.jpg', description: 'by profession Mechanical Engineer , Currently System Enginner at Infosys', address: 'Los Angeles, USA' },
    // ... you can add more mock profiles here
  ];

  selectedProfile: any; // Store the selected profile here
  searchText: string = ''; // Declare searchText and initialize it
  filteredProfiles: { name: string; photo: string; description: string; address: string; }[] = [];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  showProfileDetails(profile: any) {
    this.selectedProfile = profile;
  }
  showProfileOnMap(profile: any) {
    this.selectedProfile = profile;
  }
  viewProfileDetails(profileId: number) {
  this.router.navigate(['profile', profileId]);
}
  // Add a method to filter profiles based on searchText
  filterProfiles() {
    if (!this.searchText) {
      this.filteredProfiles = this.profiles; // If searchText is empty, show all profiles
    } else {
      this.filteredProfiles = this.profiles.filter((profile) =>
        profile.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }
  editingProfile: any = null; // To track which profile is being edited

  editProfile(profile: any) {
    // Set the profile being edited
    this.editingProfile = profile;
  }

  saveProfile() {
    // Add logic to update the profile data in your array or backend service
    // After updating, set editingProfile to null to exit edit mode
    this.editingProfile = null;
  }

  deleteProfile(profile: any) {
    // Add logic to delete the profile from your array or backend service
    // Example: this.profiles = this.profiles.filter(p => p !== profile);
  }
}

