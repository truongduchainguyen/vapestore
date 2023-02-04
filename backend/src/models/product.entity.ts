import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

@Entity({ name: 'product' })
export class Product extends BaseEntity {
    @ApiProperty({ description: 'Name' })
    @Column({ nullable: false, name: 'name' })
    @Expose()
    name: string;

    @ApiProperty({ description: 'Price' })
    @Column({ nullable: false, name: 'price' })
    @Expose()
    price: number;

    @ApiProperty({ description: 'Brand' })
    @Column({ nullable: false, name: 'brand' })
    @Expose()
    brand: string;

    @ApiProperty({ description: 'Status' })
    @Column({ nullable: false, name: 'status' })
    @Expose()
    status: string;

    @ApiProperty({ description: 'Nicotin' })
    @Column({ nullable: false, name: 'nicotin' })
    @Expose()
    nicotin: number;
}
