import { IsNotEmpty, MinLength } from "class-validator";
import { Column, Entity, Unique } from "typeorm";


@Entity()
@Unique(['cCodPrd'])
export class tbproductos {
  @Column()
  @MinLength(5)
  @IsNotEmpty()
  cCodPrd: string;

  @Column()
  @MinLength(5)
  @IsNotEmpty()
  cDesPrd: string;

  @Column()
  @MinLength(5)
  @IsNotEmpty()
  cPosPrd: string;

  @Column()
  @MinLength(5)
  @IsNotEmpty()
  cDesUM: string;
}
