import { Post } from 'posts/posts.interface';
import { PostsService } from './posts.service';
export declare class PostsController {
    private readonly postService;
    constructor(postService: PostsService);
    getAll(): Array<Post>;
}
