import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/about-us/header/header.component';
import { SgbuttonComponent } from './components/sgbutton/sgbutton.component';

const routes: Routes = [
  // Your routes go here
  // Example: { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
