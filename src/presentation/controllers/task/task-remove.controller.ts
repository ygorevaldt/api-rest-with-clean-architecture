import { Express, Request, Response } from "express";
import { TaskRemoveService } from "@/application/services/task";
import { HttpStatus } from "@/common/utils/http-status";
import { handleRequestError } from "@/presentation/util";

export class TaskRemoveController {
    constructor(
        private readonly server: Express,
        private readonly remove: TaskRemoveService,
        private readonly middlewares: any[]
    ) {
        this.server.delete("/task/:id", ...this.middlewares, async (req: Request, res: Response) => {
            try {
                await this.remove.execute(req.params.id);
                res.sendStatus(HttpStatus.OK);
            } catch (error: any) {
                handleRequestError(res, error);
            }
        });
    }
}