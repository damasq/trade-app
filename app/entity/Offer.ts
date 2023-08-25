import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn, OneToOne, Relation} from 'typeorm';
import {User} from './User';

@Entity('offer')
export class Offer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  give: string;

  @Column()
  want: string;

  @Column()
  date: string;

  @ManyToOne(type => User, user => user.offers)
  user: User;
}
