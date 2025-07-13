// src/services/UserService.ts
import { UserRepository } from '../repositories/UserRepository';

export class UserService {
  private repository = new UserRepository();

  async getAllUsers() {
    return this.repository.findAll();
  }

  async getUserById(id: string) {
    return this.repository.findById(id);
  }

  async createUser(userData: any) {
    return this.repository.create(userData);
  }

  async updateUser(id: string, userData: any) {
    return this.repository.update(id, userData);
  }

  async deleteUser(id: string) {
    return this.repository.delete(id);
  }
}
