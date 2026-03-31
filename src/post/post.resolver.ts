import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Post } from './post.entity';
import { PostService } from './post.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Context } from '@nestjs/graphql';



@Resolver(() => Post)
export class PostResolver {
  constructor(private postService: PostService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Post)
  createPost(@Args('data') data: CreatePostInput, @Context() ctx) {
      const user = ctx.req.user;
      console.log(user)
    return this.postService.create({
      ...data,
    userId: user.userId, 
    });
  }

  @Query(() => [Post])
  posts() {
    return this.postService.findAll();
  }


  @Query(() => Post, { nullable: true })
  post(@Args('id', { type: () => Int }) id: number) {
    return this.postService.findOne(id);
  }


  @Mutation(() => Post)
  updatePost(@Args('data') data: UpdatePostInput) {
    return this.postService.update(data);
  }


  @Mutation(() => Post)
  deletePost(@Args('id', { type: () => Int }) id: number) {
    return this.postService.remove(id);
  }
}