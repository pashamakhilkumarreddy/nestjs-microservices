import { Injectable } from '@nestjs/common';
import { CreateUserDto, User } from '@nestjs-microservices/shared';
import { UsersRepository } from './users.repository';

@Injectable()
export class AppService {
  constructor(private readonly usersRepository: UsersRepository) {}

  /**
   * Creates a new user with the provided data.
   * 
   * @param data The data of the user to create.
   * 
   * @returns void
   */
  createUser(data: CreateUserDto): void {
    this.usersRepository.save(data);
  }

  /**
   * Retrieves a user by their ID.
   * 
   * @param id The ID of the user to retrieve.
   * 
   * @returns The user object if found, otherwise null.
   * 
   */
  getUser(id: number): User {
    return this.usersRepository.findOne(id);
  }
}
