import { BaseUser } from "../baseModel/baseUser";

export interface LoginResponse extends BaseUser{
  token:string;
  status:number;
  twoFaOptions:string;
  refreshToken?:string;
  rtExpiration:string
}
