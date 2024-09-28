import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "../service/auth/auth.service";
@Injectable({providedIn:'root'})
  export class AuthGuard implements CanActivate{
    constructor(private router:Router,private authenticationService:AuthService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      if(this.authenticationService.getToken() && (state.url === 'account/login' || state.url==='account/register')){
        this.router.navigate(['/dashboard'])
        return true
      }
      if(this.authenticationService.getToken() ){


        return true;

      }else{
        this.router.navigate(['account'],{queryParams:{returnUrl:state.url}});
        return false
      }
      //not logged in so redirect to login page with the return url


    }
  }

