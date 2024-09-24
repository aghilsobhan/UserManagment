export class AuthenticationModel{
  constructor(public token:string,public status:string,public twoFaOptions:string,public refreshToken:string,public rtExpiration:string){}
}

