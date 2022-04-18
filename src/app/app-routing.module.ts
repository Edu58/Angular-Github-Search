import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './Components/search/search.component';
import { UserReposComponent } from './Components/user-repos/user-repos.component';

const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'user-repos', component: UserReposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
