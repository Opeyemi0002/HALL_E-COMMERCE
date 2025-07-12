import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { userRole } from '../enum/userrole.enum';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'input your first name',
    example: 'John',
  })
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'input your last name or surname',
    example: 'Wick',
  })
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: 'input your email',
    example: 'johnwick@hotmail.com',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/, {
    message:
      'Password must be at least 8 characters long, include an uppercase letter and a special character',
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsEnum(userRole)
  @IsOptional()
  role?: userRole;
}
