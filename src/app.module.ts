import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { AppResolver } from './app.resolver'; // ✅ IMPORT
import { AuthModule } from './auth/auth.module';
import { PostModule } from './post/post.module';


@Module({
  imports: [
AuthModule,
PostModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    }),
        
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver], // ✅ ADD THIS
})
export class AppModule {}