import { Response, Request } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
    constructor(private createCategoryUseCase: CreateCategoryUserCase) {}

    handle(request: Request, response: Response) {
        const { name, description } = request.body;

        this.createCategoryService.execute({ name, description });

        return response.status(201).send();
    }
}

export { CreateCategoryController }