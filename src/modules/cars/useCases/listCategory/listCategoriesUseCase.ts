import { Request, Response } from "express";

class listCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute(): Category[] {
      const categories = this.categoriesRepository.list();
  
      return categories;
    }
}

export { listCategoriesUseCase }