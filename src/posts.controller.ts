import { Post_interface } from 'posts/posts.interface';
import { PostsService } from './posts.service';
import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

@Controller('/posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  //HTTP GET req
  @Get('/')
  public getAll(): Array<Post_interface> {
    return this.postService.getAll();
  }

  //HTTP GET req:id
  @Get(':id')
  public getOne(@Param('id', ParseIntPipe) id: number) {
    return this.postService.getOne(id);
  }

  //HTTP POST req
  @Post('/')
  public CreatePost(@Body() post: Post_interface) {
    return this.postService.CreatePost(post);
  }

  //HTTP DELETE req
  @Delete(':id')
  public deletePost(@Param('id', ParseIntPipe) id: number): void {
    this.postService.DeletePost(id);
  }

  //HTTP PUT req
  @Put(':id')
  Update_post(
    @Param('id', ParseIntPipe) id: number,
    @Body() post: Post_interface,
  ): Post_interface {
    return this.postService.updatePost(id, post);
  }
}
