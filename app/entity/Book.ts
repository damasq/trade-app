import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn, OneToOne, Relation} from 'typeorm';
import {Author} from './Author';

@Entity('books')
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  rating: number;

  @Column()
  price: number;

  @ManyToOne(type => Author, author => author.books)
  author: Author;
}
