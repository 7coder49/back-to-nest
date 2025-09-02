import { Body, Controller, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import express from "express";
import { User } from './entities/users.entities';
import { addUserDto } from './dto/create-user.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get("getAllUsers")
  // @UseGuards(AuthGuard("jwt"))
  async getAllUsers(@Req() req: express.Request, @Res() res: express.Response) {
    try {
      let area = await this.usersService.getAllUsers();
      res.status(HttpStatus.OK).json({
        success: true,
        data: area,
        message: "Get users successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
        success: false,
        message: "Error in get users",
      });
    }
  }

  @Post('addNewUser')
  async addNewUser(@Req() req: express.Request, @Res() res: express.Response, @Body() userData: addUserDto) {
    try {
      let newUser = await this.usersService.addNewUser(userData);
      res.status(HttpStatus.CREATED).json({
        success: true,
        data: newUser,
        message: "User created successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
        success: false,
        message: "Error in creating user",
      });
    }
  }
}