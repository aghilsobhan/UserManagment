import { BaseUser } from "../baseModel/baseUser";

export interface ProfileModel extends BaseUser {
    id: number,
    userName: string,
    email: string,
    phoneNumber: string,
    rocketChatUserName: string,
    phoneNumberConfirmed: boolean,
    emailConfirmed: boolean,
    twoFactorEnabled: boolean,
    rocketChatUserNameConfirmed: boolean,
    canEnableTwoFactor: boolean,
    twoFactorMessage: string,
    firstName: string,
    lastName: string,
    fatherName: string,
    nationalCode: string,
    profileImage: string,
    role: string
}
