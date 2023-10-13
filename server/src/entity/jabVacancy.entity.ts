import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('job_vacancies')
export class JabVacancy {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  position!: string;

  @Column()
  rewardPay!: string;

  @Column()
  contents!: string;

  @Column()
  skill!: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt?: Date | null;
}
