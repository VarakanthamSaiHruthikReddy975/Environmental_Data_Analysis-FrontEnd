import { CanActivateChildFn, Router } from "@angular/router";
import { AuthService } from "src/app/service/AuthService";
import { inject } from '@angular/core';

export const authGuard: CanActivateChildFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const token = localStorage.getItem('token');

    if(!token){
        router.navigate(['/login']);
        return false;
    }

    //checking if the token is expired
    if(authService.isTokenExpired(token)){
        router.navigate(['/login']);
        return false;
    }

    // Optional: check specific route permissions
    const requiredRole = route.data?.['role'];
    if(requiredRole){
        const userRole = authService.getUserRole();
        if(userRole !== requiredRole){
            router.navigate(['/unauthorized']);
            return false;
        }
    }
    return true;
};

