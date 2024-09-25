import { AuthenticationModel } from '../token/token';
export interface ResponseLogin {
  result: AuthenticationModel;
  status: number;
  messages: any;
  message: string;
}
