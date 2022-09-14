import { Module } from '@nestjs/common';
import {TaskController} from "./task.controller";
import {TaskService} from "./task.service";
import {PrismaService} from "../../services/prisma.service";

@Module({
  imports: [],
  controllers: [TaskController],
  providers: [TaskService, PrismaService],
})
export class TaskModule {}
