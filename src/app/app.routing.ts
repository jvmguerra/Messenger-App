import { RouterModule, Routes } from '@angular/router';
import { LoginCardComponent } from '../app/login/login-card/login-card.component';
import { MessengerWrapperComponent } from '../app/main/messenger-wrapper/messenger-wrapper.component';

const routes: Routes = [
  { path: '', component: LoginCardComponent },
  { path: 'chat', component: MessengerWrapperComponent }
];

export const routing = RouterModule.forRoot(routes);
