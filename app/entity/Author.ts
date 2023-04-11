import {BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Book} from './Book';

@Entity('author')
export class Author extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany(type => Book, book => book.author)
  // @JoinColumn()
  books: Book[];
}
