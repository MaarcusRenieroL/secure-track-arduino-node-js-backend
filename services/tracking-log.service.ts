import type { Request, Response, NextFunction } from "express";
import { db } from "../db";

let latitude: number;
let longitude: number;

export const trackingLogService = async (
  request: Request,
  response: Response,
  nextFuntion: NextFunction,
) => {
  try {
    latitude = parseFloat(request.body.latitude);
    longitude = parseFloat(request.body.longitude);
    const trackingLog = await db.trackinglogs.create({
      data: {
        regNumber: "KCA 123T",
        gpsDeviceId: "123456",
        routeNumber: "default",
        timeStamp: new Date(),
        latitude: latitude,
        longitude: longitude,
        organizationId: "65e53df4227fbcc1ab607e80",
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

export { latitude, longitude };
