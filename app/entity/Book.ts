import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  author: string;

  @Column()
  name: string;

  @Column()
  description: string;
}
