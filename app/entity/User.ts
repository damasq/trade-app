import {BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, Relation} from 'typeorm';
import {Offer} from './Offer';

@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @OneToMany(type => Offer, offer => offer.user)
  offers: Offer[];
//   author: Promise<Offer[]>;
}
