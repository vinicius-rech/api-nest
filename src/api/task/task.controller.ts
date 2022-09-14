import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
} from '@nestjs/common';
import {Task as TaskModel} from '@prisma/client';
import { TaskProps } from 'src/global/types';
import {ApiTags} from "@nestjs/swagger";
import {TaskService} from "./task.service";

@Controller()
export class TaskController {
    constructor(private readonly taskService: TaskService) {}
    @ApiTags('task')
    @Post('task/new')
    async createTask(
        @Body() taskData: TaskProps,
    ): Promise<TaskModel> {
        const {title, description, status} = taskData;
        return this.taskService.createTask({
            title,
            description,
            status
        });
    }

    // @ApiTags('blog-post')
    // @Get('blog-post/:id')
    // async getPostById(@Param('id') id: string): Promise<PostModel> {
    //     return this.taskService.blogPost({id: Number(id)});
    // }

    // @ApiTags('blog-posts')
    // @Get('blog-posts/feed')
    // async getPublishedPosts(): Promise<PostModel[]> {
    //     return this.taskService.blogPosts({
    //         where: {published: true},
    //     });
    // }

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

    // @ApiTags('blog-post')
    // @Delete('blog-post/:id')
    // async deletePost(@Param('id') id: string): Promise<PostModel> {
    //     return this.taskService.deleteBlogPost({id: Number(id)});
    // }
}