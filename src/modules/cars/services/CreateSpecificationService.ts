import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  execute({ description, name }: IRequest): void {
    console.log("");
  }
}

export { CreateSpecificationService };