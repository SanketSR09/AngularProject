import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileListComponent } from './views/profile-list/profile-list.component';
import { AdminDashboardComponent } from './views/admin-dashboard/admin-dashboard.component';
import { ProfiledetailsComponent } from './views/profiledetails/profiledetails.component';

const routes: Routes = [ { path: '', component: ProfileListComponent },
{path:'admin',component:AdminDashboardComponent},
// {path:'profile/:id', component:ProfileListComponent},
// {path:'profilelist', component:ProfileListComponent},
// {path:'profiledetails', component:ProfiledetailsComponent},
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
