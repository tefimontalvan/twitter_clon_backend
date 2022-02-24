import { Controller } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { Crud, CrudController } from '@nestjsx/crud';
import { Tweet } from './tweet.entity';
import { CreateTweetDto } from './dto/create-tweet.dto';

@Crud({
  model: { type: Tweet },
  dto: { create: CreateTweetDto },
  query: {
    alwaysPaginate: true,
    join: {
      room: {
        eager: true,
      },
    },
  },
  routes: {
    only: ['getManyBase', 'createOneBase', 'getOneBase', 'deleteOneBase'],
  },
})
@Controller('tweet')
export class TweetController implements CrudController<Tweet> {
  constructor(public service: TweetService) {}
}
