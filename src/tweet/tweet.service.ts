import { Injectable } from '@nestjs/common';
import { Tweet } from './tweet.entity';
import { TweetRepository } from './tweet.repository';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class TweetService extends TypeOrmCrudService<Tweet> {
  constructor(private readonly tweetRepository: TweetRepository) {
    super(tweetRepository);
  }
}
