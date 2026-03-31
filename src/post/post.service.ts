import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  create(data: CreatePostInput) {
    return this.prisma.post.create({
      data,
    });
  }

  findAll() {
    return this.prisma.post.findMany();
  }

  findOne(id: number) {
    return this.prisma.post.findUnique({
      where: { id },
    });
  }

  update(data: UpdatePostInput) {
    const { id, ...rest } = data;
    return this.prisma.post.update({
      where: { id },
      data: rest,
    });
  }

  remove(id: number) {
    return this.prisma.post.delete({
      where: { id },
    });
  }
}