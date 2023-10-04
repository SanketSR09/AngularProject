import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  getProfileDetails(): any {
    throw new Error('Method not implemented.');
  }
  private profiles: any[] = [
    { name: 'Sanket Rangari', photo: 'assets/profile-photos/photo1.jpg', description: 'Have a Great Knowledge about HTMl,CSS. Also Intrested in JAVA.', address: 'New York, USA' },
    { name: 'Omkar Deshmukh', photo: 'assets/profile-photos/photo2.png', description: '5 Star Java Developer , Great knowledege about Agile', address: 'Los Angeles, USA' },
    { name: 'Shubham Deshmukh', photo: 'assets/profile-photos/photo3.jpg', description: 'Java Developer , Great knowledege about Backend Technologies', address: 'Los Angeles, USA' },
    { name: 'Ritesh Mangtani', photo: 'assets/profile-photos/photo4.jpg', description: '4th University Topper, Currently Patent Engineer at LegalForce', address: 'Los Angeles, USA' },
    { name: 'Krishna Gulhane', photo: 'assets/profile-photos/photo5.jpg', description: 'Studied at VIIT College , Currently Civil Engineer at JSW Steels', address: 'Los Angeles, USA' },
    { name: 'Aniket Dhakate', photo: 'assets/profile-photos/photo6.jpg', description: 'by profession Mechanical Engineer , Currently System Enginner at Infosys', address: 'Los Angeles, USA' }, // ... add more profiles here
  ];

  constructor() { }

  // Get all profiles
  getProfiles() {
    return this.profiles;
  }

  // Get a profile by ID
  getProfileById(id: number) {
    return this.profiles.find(profile => profile.id === id);
  }

  // Add a new profile
  addProfile(profile: any) {
    profile.id = this.generateUniqueId(); // You can implement this method
    this.profiles.push(profile);
  }

  // Update an existing profile
  updateProfile(profile: any) {
    const index = this.profiles.findIndex(p => p.id === profile.id);
    if (index !== -1) {
      this.profiles[index] = profile;
    }
  }

  // Delete a profile by ID
  deleteProfile(id: number) {
    const index = this.profiles.findIndex(profile => profile.id === id);
    if (index !== -1) {
      this.profiles.splice(index, 1);
    }
  }

  // Generate a unique ID (You can implement this method as needed)
  private generateUniqueId() {
    // Implement your logic for generating a unique ID
    return Math.floor(Math.random() * 10000);
  }
}
