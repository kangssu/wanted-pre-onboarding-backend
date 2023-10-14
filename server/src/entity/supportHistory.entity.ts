import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('support_histories')
export class SupportHistory {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'job_vacancy_id' })
  jobVacancyId!: number;

  @Column({ name: 'user_id' })
  userId!: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @DeleteDateColumn({ name: 'canceled_at', type: 'timestamp', nullable: true })
  canceledAt?: Date | null;
}
