import { User } from "../entities/user";
import { UserRepository } from "../../repositories/UserRepository";
import { UserRepository as IUserRepositoryInterface } from "../interfaces/repositories";

export class UserGateway implements IUserRepositoryInterface {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async findByCPF(cpf: string): Promise<User | null> {
    try {
      const userData = await this.repository.findByCPF(cpf);
      if (!userData) return null;

      return User.create(
        userData.id.toString(),
        userData.name,
        userData.cpf,
        userData.email
      );
    } catch (error) {
      throw error;
    }
  }

  async create(userData: { name: string; cpf: string; email: string }) {
    try {
      const newUser = await this.repository.create(userData);

      return User.create(
        newUser.id.toString(),
        newUser.name,
        newUser.cpf,
        newUser.email
      );
    } catch (error) {
      throw error;
    }
  }
}
