import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { ProjectComponent } from './project/project.component';
import { TeamListComponent } from './team/team-list/team-list.component';
import { MessagesComponent } from './messages/messages.component';
import { appRoutes } from './routes';
import { UserService } from './_services/user.service';
import { TeamCardComponent } from './team/team-card/team-card.component';
import { TeamDetailComponent } from './team/team-detail/team-detail.component';
import { TeamDetailResolver } from './_resolvers/team-detail.resolver';
import { TeamListResolver } from './_resolvers/team-list.resolver';
import { TEditComponent } from './team/t-edit/t-edit.component';
import { TEditResolver } from './_resolvers/t-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { PhotoEditorComponent } from './team/photo-editor/photo-editor.component';




export function tokenGetter(){
  return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      ProjectComponent,
      TeamListComponent,
      MessagesComponent,
      TeamCardComponent,
      TeamDetailComponent,
      TEditComponent,
      PhotoEditorComponent

   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      TabsModule.forRoot(),
      RouterModule.forRoot (appRoutes),
      NgxGalleryModule,
      FileUploadModule,
      JwtModule.forRoot({
        config: {
          tokenGetter,
          whitelistedDomains: ['localhost:5000'],
          blacklistedRoutes: ['localhost:5000/api/auth']
        }
      })
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      UserService,
      TeamDetailResolver,
      TeamListResolver,
      TEditResolver,
      PreventUnsavedChanges
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
