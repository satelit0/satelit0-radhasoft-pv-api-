import { Exclude } from 'class-transformer';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Product } from '../../products/entities/product.entity';


@Entity()
export class Existence {
  @PrimaryGeneratedColumn({})
  id: number;

  @Column()
  subsidiaryId: number;

  @Column()
  productId: number;

  @Column('double precision', { default: 0 , comment:'cantidad de existencia'})
  qty: number; 

  @Column()
  dateEntry: Date;

  @Column()
  dateExpire: Date;
 
  @Column({ default: true, nullable: false })
  isActive: boolean; 

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @Exclude()
  @DeleteDateColumn()
  deletedAt: Date;

  @OneToOne( () => Product, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
  @JoinColumn()
  product: Product  
}
