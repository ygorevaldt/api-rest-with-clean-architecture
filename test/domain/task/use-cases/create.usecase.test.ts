import { Task } from "@/domain/task/entity/task.entity";
import { getTestingModule } from "../getTestingModule";

describe("create task", () => {
    const { createUseCase } = getTestingModule();
    const userId = "53211d23-a8e0-4c58-8857-91d19d64fe27";
    const task = new Task({
        title: "Primeira tarefa"
    });

    it("should create an new task to existing user", async () => {
        await expect(createUseCase.execute({
            userId,
            task
        })).resolves.not.toThrow();
    });

    it("should throw error if user is not registred", async () => {
        await expect(createUseCase.execute({
            userId: "any",
            task
        })).rejects.toThrow();
    });
});