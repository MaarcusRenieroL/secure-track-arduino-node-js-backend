import { Router } from "express";
import { alertLogService } from "../services/alert-log.service";

const alertLogRouter: Router = Router();

alertLogRouter.post("/alert-log", alertLogService);

export default alertLogRouter;
