import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { ProfileListComponent } from './views/profile-list/profile-list.component';
import { ProfiledetailsComponent } from './views/profiledetails/profiledetails.component';
import { AdminDashboardComponent } from './views/admin-dashboard/admin-dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MapComponent } from './map/map.component';
import { ProfileService } from './services/profile.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    ProfileListComponent,
    ProfiledetailsComponent,
    AdminDashboardComponent,
    NavbarComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Add FormsModule here
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
