export class LoginRequest {
 constructor(public  userName: string,public  password: string, public captchaText: string,public keepMeSignedIn:boolean) {}
}
