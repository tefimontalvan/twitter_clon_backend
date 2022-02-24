import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetModule } from './tweet/tweet.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/databaseConfig';
import { ConfigModule } from '@nestjs/config';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...databaseConfig }),
    /* ConfigModule.forRoot({
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
    }), */
    TweetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
