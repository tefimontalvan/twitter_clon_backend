import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { MaxLength, IsNotEmpty } from 'class-validator';

@Entity()
export class Tweet extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  create_at: Date = new Date(Date.now());

  @MaxLength(400, { always: true })
  @IsNotEmpty({ message: 'The description is required' })
  @Column({ type: 'varchar', length: 400, nullable: false })
  description: string;
}
