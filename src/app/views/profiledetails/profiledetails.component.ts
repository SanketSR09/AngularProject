import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profiledetails',
  templateUrl: './profiledetails.component.html',
  styleUrls: ['./profiledetails.component.css']
})
export class ProfiledetailsComponent {
  @Input() profile: any; // Input property to receive the profile data

}
