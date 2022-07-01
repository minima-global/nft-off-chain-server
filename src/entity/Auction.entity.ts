import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Auction {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nftName: string

    @Column()
    nftDescription: string

    @Column()
    nftUrl: string

    @Column()
    nftTokenId: string

    @Column()
    nftPrice: number

    @Column()
    nftSellerId: string
}