import { IsNotEmpty, MinLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";


@Entity()
@Unique(['id'])
export class tbrevisar {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  @MinLength(5)
  @IsNotEmpty()
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
