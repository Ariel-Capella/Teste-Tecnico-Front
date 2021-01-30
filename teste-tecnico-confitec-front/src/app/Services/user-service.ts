import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../Models/user-model';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

    constructor (
        private http: HttpClient
    ) {}

    public registerUser(user: UserModel): Observable<Object> {
        const header = new HttpHeaders().set('Content-Type', 'application/json');

        const optionsObject = {
            headers: header
        };

        return this.http.post('http://localhost:51392/api/User/', user, optionsObject);

    }

    public getUserList() {
        return this.http.get<UserModel[]>('http://localhost:51392/api/User/GetUserList');
    }

    public deleteUser(userId: number) {
        return this.http.post('http://localhost:51392/api/User/DeleteUser', userId)
    }
}