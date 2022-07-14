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

    @Column({ type: 'json', nullable: true })
    detailsJson?: object[]

    @Column("varchar", { length: 400 })
    sellerAddress: string

    @Column("varchar", { nullable: true, length: 400 })
    buyerAddress?: string
}
