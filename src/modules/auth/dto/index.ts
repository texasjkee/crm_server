import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserLoginDTO{
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    password:string;
}