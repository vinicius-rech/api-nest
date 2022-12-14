import {Injectable} from "@nestjs/common";
import {Task, Prisma} from "@prisma/client";
import {PrismaService} from "../../services/prisma.service";

@Injectable()
export class TaskService {
    constructor(
        private prisma: PrismaService,
    ){}

    async listAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.TaskWhereUniqueInput;
        where?: Prisma.TaskWhereInput;
        orderBy?: Prisma.TaskOrderByWithRelationInput;
    }): Promise<Task[]> {
        const {skip, take, cursor, where, orderBy} = params;
        return this.prisma.task.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        });
    }

    async createTask(data): Promise<Task> {
        return this.prisma.task.create({data})
    }

    async deleteTask(task: Prisma.TaskWhereUniqueInput): Promise<Task> {
        return this.prisma.task.delete({
            where: {
                id: task.id
            }
        })
    }
}