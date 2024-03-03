import { Router } from 'express';
import { passengerLogService } from '../services/passenger-log.service'

const passengerLogRouter: Router = Router();

passengerLogRouter.post("/user-log", passengerLogService)

export default passengerLogRouter;