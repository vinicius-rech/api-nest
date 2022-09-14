import {Prisma} from "@prisma/client";

export interface User {
    email: String;
    name?: String;
}
