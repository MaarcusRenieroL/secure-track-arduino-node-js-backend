import type { Request, Response, NextFunction } from "express";
import { db } from "../db";
import { latitude, longitude } from "./tracking-log.service";

export const alertLogService = async (
  request: Request,
  response: Response,
  nextFuntion: NextFunction,
) => {
  try {
    const incident = request.body.incident;

    console.log("incident detected? [Y/N]: ", incident);

    console.log(
      "At location: ",
      latitude,
      " latitude",
      longitude,
      " longitude",
    );

    await db.alertlogs.create({
      data: {
        incidentType: incident,
        incidentTime: new Date(),
        lat: latitude,
        lng: longitude,
        organizationId: "65e53df4227fbcc1ab607e80",
      },
    });

    return response.status(201).json({
      statusCode: 200,
    });
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Something went Wrong" });
  }
};
