import { Routes, RouterModule } from '@angular/router';

import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { DirectivesComponent } from './Components/directives/directives.component';
import { PipesComponent } from './Components/pipes/pipes.component';
import { FormsComponent } from './Components/forms/forms.component';
import { ReactiveFormsComponent } from './Components/reactive-forms/reactive-forms.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

export const APP_ROUTES: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/data-binding'},
  {path: 'data-binding', component: DataBindingComponent},
  {path: 'data-binding/:variable', component: DataBindingComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'reactive-forms', component: ReactiveFormsComponent},
  {path: '**', component: PageNotFoundComponent}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);