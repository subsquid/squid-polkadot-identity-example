import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"

@Entity_()
export class AccountIdentity {
  constructor(props?: Partial<AccountIdentity>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: true})
  web!: string | undefined | null

  @Column_("text", {nullable: true})
  riot!: string | undefined | null

  @Column_("text", {nullable: true})
  email!: string | undefined | null

  @Column_("text", {nullable: true})
  image!: string | undefined | null

  @Column_("text", {nullable: true})
  legal!: string | undefined | null

  @Column_("text", {nullable: true})
  display!: string | undefined | null

  @Column_("text", {nullable: true})
  twitter!: string | undefined | null

  @Column_("text", {nullable: true})
  pgpFingerprint!: string | undefined | null
}
