import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL = environment.apiUrl + 'auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  currentUser: User;
  photoUrl = new BehaviorSubject<string>('../../assets/user.png'); // give initial value to the behaviour subject
  currentPhotoUrl = this.photoUrl.asObservable(); // When currentphotourl is updated then our components are updated

constructor(private http: HttpClient) { }

changeMemberPhoto(photoUrl: string){
  // tslint:disable-next-line: max-line-length
  this.photoUrl.next(photoUrl); // When the user logs in, we call this method to update the photo of the user thats logging in.. Next replace the user png default photo
}

login(model: any){
  return this.http.post(this.baseURL + 'login', model).pipe(
    map((response: any) => {
      const user = response;
      if(user) {
        localStorage.setItem('token', user.token);
        localStorage.setItem('user', JSON.stringify(user.user));
        this.decodedToken = this.jwtHelper.decodeToken(user.token);
        this.currentUser = user.user;
        this.changeMemberPhoto(this.currentUser.photoUrl); //Calling this method during log in to update the photo

      }
    })
  );
}

register(model: any){
  return this.http.post(this.baseURL + "register", model);
}

loggedIn(){
  const token = localStorage.getItem('token');
  return !this.jwtHelper.isTokenExpired(token);

}

}
