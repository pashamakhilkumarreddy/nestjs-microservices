import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MakePaymentDto {
  @ApiProperty({
    type: String,
    description: 'send userId as a string',
    example: 12,
    required: true
  })
  @IsNotEmpty()
  @IsNumber()
  userId: string;

  @ApiProperty({
    type: String,
    description: 'send amount as a string',
    example: 230,
    required: true
  })
  @IsNotEmpty()
  @IsNumber()
  amount: string;
}
