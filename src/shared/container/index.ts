import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/infra/typeorm/entities/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/infra/typeorm/entities/repositories/IUsersRepository";
import { CarsRepository } from "../../modules/cars/infra/typeorm/entities/repositories/CarsRepository";
import { CategoriesRepository } from "../../modules/cars/infra/typeorm/entities/repositories/CategoriesRepository";
import { SpecificationsRepository } from "../../modules/cars/infra/typeorm/entities/repositories/SpecificationsRepository";
import { ICarsRepository } from "../../modules/cars/repositories/ICarsRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationsRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);
