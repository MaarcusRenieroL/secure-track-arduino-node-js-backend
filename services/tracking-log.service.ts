import type { Request, Response, NextFunction} from "express";
import { db } from "../db";

export const trackingLogService = async (
  request: Request,
  response: Response,
  nextFuntion: NextFunction
) => {
  try {
    const latitude = parseFloat(request.body.latitude);
    const longitude = parseFloat(request.body.longitude);

    const trackingLog = await db.trackinglogs.create({
      data: {
        regNumber: "KCA 123T",
        gpsDeviceId: "123456",
        routeNumber: "default",
        timeStamp: new Date(),
        latitude: latitude,
        longitude: longitude,
        organizationId: "65d989a1bc0a6ec8b97ad24d",
      },
    });

    return response.status(201).json({
      statusCode: 200,
      data: trackingLog,
    });
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Something went Wrong" });
  }
};
