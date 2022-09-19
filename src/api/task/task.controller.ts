import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete
} from "@nestjs/common";
import { Task as TaskModel } from "@prisma/client";
import { ApiTags } from "@nestjs/swagger";
import { TaskService } from "./task.service";

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {
  }

  // @ApiTags('task')
  // @Post('task/new')
  // async createTask(
  //     @Body() taskData: TaskProps,
  // ): Promise<TaskModel> {
  //     const {description} = taskData;
  //     return this.taskService.createTask({
  //         description
  //     });
  // }

  // @ApiTags('blog-post')
  // @Get('blog-post/:id')
  // async getPostById(@Param('id') id: string): Promise<PostModel> {
  //     return this.taskService.blogPost({id: Number(id)});
  // }

  @ApiTags('task')
  @Get('task/all')
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

  // @ApiTags('blog-posts')
  // @Get('blog-posts/filtered-posts/:searchString')
  // async getFilteredPosts(
  //     @Param('searchString') searchString: string,
  // ): Promise<PostModel[]> {
  //     return this.taskService.blogPosts({
  //         where: {
  //             OR: [
  //                 {
  //                     title: {contains: searchString},
  //                 },
  //                 {
  //                     content: {contains: searchString},
  //                 },
  //             ],
  //         },
  //     });
  // }

  // @ApiTags('blog-post')
  // @Put('blog-post/publish/:id')
  // async publishPost(@Param('id') id: string): Promise<PostModel> {
  //     return this.taskService.updateBlogPost({
  //         where: {id: Number(id)},
  //         data: {published: true},
  //     });
  // }

  @ApiTags('task')
  @Delete('task/delete/:id')
  async deleteTask(@Param('id') id: string): Promise<TaskModel> {
      return this.taskService.deleteTask({id: Number(id)});
  }
}