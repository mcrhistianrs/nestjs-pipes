import {IsEmail, IsNotEmpty, isNotEmpty, Length} from 'class-validator';

export class CreateUserDto {

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Length(5)
    password: string;
}
