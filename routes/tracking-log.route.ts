import { Router } from 'express';
import { trackingLogService } from "../services/tracking-log.service"

const trackingLogRouter: Router = Router();

trackingLogRouter.post("/tracking-log", trackingLogService)

export default trackingLogRouter;