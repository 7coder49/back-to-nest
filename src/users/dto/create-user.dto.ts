import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class addUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @Length(2, 100)
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(6, 100)
  password: string;
}