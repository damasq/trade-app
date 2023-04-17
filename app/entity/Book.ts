import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn} from 'typeorm';
import {Author} from './Author';

@Entity('book')
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  // @Column()
  // isInCart: boolean;

  @ManyToOne(type => Author, author => author.books, {eager: true})
  // @JoinColumn()
  @JoinColumn({
    name: 'author_id',
  })
  author: Author;
}
