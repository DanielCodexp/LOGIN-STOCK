import { IsNotEmpty, MinLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";


@Entity()
@Unique(['cCodPrd'])
export class tbrevisar {
  @PrimaryGeneratedColumn()
  cCodPrd: string;

  @Column()
  @MinLength(5)
  @IsNotEmpty()
  dtFecReg: string;

  @Column()
  @MinLength(5)
  @IsNotEmpty()
  cCuePer: string;

  @Column()
  @MinLength(5)
  @IsNotEmpty()
  nInvAPrd: string;


  @Column()
  @MinLength(5)
  @IsNotEmpty()
  nRevPrd: string;

}
