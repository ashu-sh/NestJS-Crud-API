import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { Post_interface } from 'posts/posts.interface';

@Injectable()
export class PostsService {
  private posts: Array<Post_interface> = [];

  //Get all posts
  public getAll(): Array<Post_interface> {
    return this.posts;
  }

  //Get single Post
  public getOne(id: number) {
    const Post_interface = this.posts.find((post) => post.id === id);
    if (!Post_interface) {
      throw new HttpException(
        'Post not found on this Id',
        HttpStatus.NOT_FOUND,
      );
    }
    return Post_interface;
  }

  //Create Post
  public CreatePost(post: Post_interface) {
    const Post_interface = {
      id: post.id,
      date: post.date,
      name: post.name,
      catagory: post.catagory,
    };
    this.posts.push(Post_interface);
    return Post_interface;
  }

  //Delete Post
  public DeletePost(id: number) {
    const post: number = this.posts.findIndex((post) => post.id === id);
    if (!post) {
      throw new HttpException(
        'Post not found on this id',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.posts.splice(post);
  }

  //Update Post
  public updatePost(id: number, post: Post_interface) {
    const post_number: number = this.posts.findIndex((post) => post.id === id);
    const Post: Post_interface = {
      id: post.id,
      date: post.date,
      name: post.name,
      catagory: post.catagory,
    };
    if (post_number == -1) {
      throw new HttpException('not found', HttpStatus.NOT_FOUND);
    }
    this.posts[post_number] = Post;

    return Post;
  }
}
