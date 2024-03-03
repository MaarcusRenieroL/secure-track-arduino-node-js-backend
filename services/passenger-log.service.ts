import type { Request, Response, NextFunction } from "express";
import { db } from "../db";

export const passengerLogService = async (
  request: Request,
  response: Response,
  nextFunction: NextFunction
) => {
  try {
    const userId = request.body.uid;
    const currentDate = new Date();
    const dTimeStamp = new Date(currentDate.getTime() + 8 * 60 * 60 * 1000);

    console.log(userId);
    const passengerLog = await db.passengerlogs.create({
      data: {
        uid: userId,
        name: "default",
        fleetNumber: "B0001",
        routeNumber: "default",
        boardingPoint: "default",
        dropPoint: "default",
        bTimeStamp: currentDate,
        dTimeStamp: dTimeStamp,
        organizationId: "65d989a1bc0a6ec8b97ad24d",
      },
    });

    return response.status(201).json({
      statusCode: 200,
      data: passengerLog,
    });
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Something went Wrong" });
  }
};
