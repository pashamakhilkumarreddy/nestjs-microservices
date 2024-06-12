import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  // @ApiProperty({
  //     type: String,
  //     description: 'send name as a string',
  //     example: 'johndoe',
  //     required: true
  //   })
  @IsNotEmpty()
  @IsString({
    message: 'send name as a string',
  })
  name: string;

  // @ApiProperty({
  //     type: String,
  //     description: 'send email as a string',
  //     example: 'john@doe.com',
  //     required: true
  //   })
  @IsNotEmpty()
  @IsString({
    message: 'send email as a string',
  })
  @IsEmail()
  email: string;
}
