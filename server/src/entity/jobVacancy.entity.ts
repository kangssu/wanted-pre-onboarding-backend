import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Company } from './company.entity';

@Entity('job_vacancies')
export class JobVacancy {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'company_id' })
  companyId!: number;

  @Column()
  position!: string;

  @Column({ name: 'reward_pay' })
  rewardPay!: string;

  @Column()
  contents!: string;

  @Column()
  skill!: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt?: Date | null;

  @ManyToOne(() => Company)
  @JoinColumn({ name: 'company_id' })
  company!: Company;
}
