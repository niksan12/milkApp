import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamListComponent } from './team/team-list/team-list.component';
import { ProjectComponent } from './project/project.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';
import { TeamDetailComponent } from './team/team-detail/team-detail.component';
import { TeamDetailResolver } from './_resolvers/team-detail.resolver';
import { TeamListResolver } from './_resolvers/team-list.resolver';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'team', component: TeamListComponent, resolve: {users: TeamListResolver}},
      {path: 'team/:id', component: TeamDetailComponent, resolve: {user: TeamDetailResolver}},
      {path: 'project', component: ProjectComponent},
      {path: 'messages', component: MessagesComponent},
    ]
  },
  {path: '**', redirectTo: 'home',  pathMatch: 'full'},
];
