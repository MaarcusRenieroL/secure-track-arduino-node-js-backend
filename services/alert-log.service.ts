import type { Request, Response } from "express";
import { db } from "../db";
import { latitude, longitude } from "./tracking-log.service";
import { pusherServer } from "../lib/pusher";

export const alertLogService = async (
  request: Request,
  response: Response,
) => {
  try {
    const incident = request.body.incident;

    console.log("incident detected? [Y/N]: ", incident);

    const result = await db.alertlogs.create({
      data: {
        incidentType: incident,
        incidentTime: new Date(),
        lat: latitude,
        lng: longitude,
        organizationId: "65e53df4227fbcc1ab607e80",
      },
    });

    if (result) {
      pusherServer.trigger("audit-logs", "incoming-message", result);
    }

    return response.status(201).json({
      statusCode: 200,
    });
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Something went Wrong" });
  }
};
