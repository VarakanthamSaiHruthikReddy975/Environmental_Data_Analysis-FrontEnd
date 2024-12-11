import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient){}

    // Login 
    login(credentials: {username: string, password: string}) {
        return this.http.post<any>('/api/auth/login', credentials);
    }

    //Token expiration and generate new token
    isTokenExpired(token: string): boolean{
        if(!token) return true;
        const expiry = JSON.parse(atob(token.split('.')[1])).exp;
        return (Math.floor(Date.now() / 1000)) >= expiry;
    }

    // User's role
    getUserRole(): string {
        const token = localStorage.getItem('token');
        if(!token) return '';
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.role;
    }

    // Refreshing Token
    refreshToken() {
        return this.http.post<any>('/api/auth/refresh-token',{
            refreshToken: localStorage.getItem('refreshToken')
        });
    }
    
    //logout
    logout(){
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
    }
    
}