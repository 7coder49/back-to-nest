import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/users.entities';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async getAllUsers() {

        let allUsers = this.userRepository.createQueryBuilder("user")
        .select([
            `user.id as "userId"`,
            `user.name as "userName"`,
            `user.email as "email"`
        ])
        .where("user.deletedAt IS NULL")

        return allUsers.execute();
    }

    async addNewUser(userData: Partial<User>) {
        const newUser = this.userRepository.create(userData);
        return this.userRepository.save(newUser);
    }
}
