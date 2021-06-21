import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const hasUser = this.usersRepository.findByEmail(email);

    if (hasUser) {
      throw new Error("User already exist");
    }

    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
