import { Post } from 'posts.interface';
export declare class PostsService {
    private posts;
    getAll(): Array<Post>;
    getOne(id: number): Post;
}
