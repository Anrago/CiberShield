import { UserSetting as Modelo } from "@prisma/client";
export class UserSetting implements Modelo {
    userId: number;
    theme: string;
    language: string;
    updateAt: Date;
}
