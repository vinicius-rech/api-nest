import {Injectable} from "@nestjs/common";
import {Task, Prisma} from "@prisma/client";
import {PrismaService} from "../../services/prisma.service";

@Injectable()
export class TaskService {
    constructor(
        private prisma: PrismaService,
    ) {
    }''
    async blogPost(
        postWhereuniqueInput: Prisma.TaskWhereUniqueInput,
    ): Promise<Task | null> {
        return this.prisma.task.findUnique({
            where: postWhereuniqueInput
        })
    }

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

    async updateBlogPost(params: {
        where: Prisma.TaskWhereUniqueInput;
        data: Prisma.TaskUpdateInput;
    }): Promise<Task> {
        const {data, where} = params;
        return this.prisma.task.update({
            data,
            where
        })
    }

    async deleteBlogPost(where: Prisma.TaskWhereUniqueInput): Promise<Task> {
        return this.prisma.task.delete({
            where
        })
    }
}