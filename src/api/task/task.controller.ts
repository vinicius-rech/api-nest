import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete
} from "@nestjs/common";
import { Task as TaskModel } from "@prisma/client";
import { ApiTags } from "@nestjs/swagger";
import { TaskService } from "./task.service";
import { TaskProps } from "../../global/types";

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {
  }

  @ApiTags("task")
  @Post("task/new")
  async createTask(
    @Body() taskData: TaskModel
  ): Promise<TaskModel> {
    const { description } = taskData;
    return this.taskService.createTask({
      description
    });
  }

  @ApiTags("task")
  @Get("task/all")
  async get(): Promise<TaskModel[]> {
    return this.taskService.listAll({
      where: {
        id: {
          gt: 0
        }
      },
      orderBy: {
        id: "desc"
      }
    });
  }

  @ApiTags("task")
  @Delete("task/delete/:id")
  async deleteTask(@Param("id") id: string): Promise<TaskModel> {
    return this.taskService.deleteTask({ id: Number(id) });
  }

  @ApiTags("task")
  @Post("task/mass-delete")
  async massDelete(
    @Body() taskData: []
  ) {
    return taskData.forEach((task: TaskProps) => {
      return this.taskService.deleteTask({ id: task.id });
    });
  }
}