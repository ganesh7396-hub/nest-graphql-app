import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field(() => Int)
  userId: number;

  @Field()
  createdAt: Date;
}