import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}
class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw Error("This user does not exist");
    }

    if (!user.admin) {
      throw Error("This user is not an admin");
    }

    const all = this.usersRepository.list();

    return all;
  }
}

export { ListAllUsersUseCase };
