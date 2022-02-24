import { EntityRepository, Repository } from 'typeorm';
import { Tweet } from './tweet.entity';

@EntityRepository(Tweet)
export class TweetRepository extends Repository<Tweet> {}
