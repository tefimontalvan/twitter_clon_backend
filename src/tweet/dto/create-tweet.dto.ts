import { IsNotEmpty } from 'class-validator';

export class CreateTweetDto {
  @IsNotEmpty({ message: 'The description is required' })
  description: string;
}
