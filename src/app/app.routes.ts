import { Routes } from '@angular/router';
import { ServicesContainerComponent } from './components/services-container/services-container.component';
import { SubservicesComponent } from './components/services-container/subservices/subservices.component';

export const routes: Routes = [
  { path: '', component: ServicesContainerComponent },
  { path: 'services/:serviceName', component: SubservicesComponent },
];
