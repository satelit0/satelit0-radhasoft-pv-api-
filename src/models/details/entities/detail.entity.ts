import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToMany, ManyToOne, JoinColumn, CreateDateColumn , UpdateDateColumn} from "typeorm";
import { Order } from '../../order/entities/order.entity';
import { Product } from '../../products/entities/product.entity';

@Entity()
export class Detail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderId: number;

  @Column()
  productId: number;

  @Column()
  price: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn() 
  updateAt: Date;

  @OneToOne( () => Order)
  @JoinColumn()
  order: Order;

  @ManyToOne(() => Product, (product) => product.detail)
  product: Product[];

}
