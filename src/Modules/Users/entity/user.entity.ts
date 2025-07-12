import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BaseEntity } from 'src/common/entity/base.entity';
import { userRole } from '../enum/userrole.enum';

@Entity()
export class User extends BaseEntity {
  @Column({
    type: 'varchar',
    nullable: false,
    length: 1024,
  })
  firstName: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 1024,
  })
  lastName: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
    length: 1024,
  })
  email: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 1024,
  })
  password: string;

  @Column({
    type: 'varchar',
    nullable: true,
    unique: true,
    length: 15,
  })
  phoneNumber: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  address: string;

  @Column({
    type: 'enum',
    enum: userRole,
    default: userRole.BUYER,
    nullable: true,
  })
  role?: userRole;
}
