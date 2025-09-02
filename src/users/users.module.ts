import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/users.entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
   TypeOrmModule.forFeature([User]),
  ]
})
export class UsersModule {}
