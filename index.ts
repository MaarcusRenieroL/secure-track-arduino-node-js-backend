import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import passengerLogRouter from "./routes/passenger-log.route";
import trackingLogRouter from "./routes/tracking-log.route";
import alertLogRouter from "./routes/alert-log.route";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.use("/api", passengerLogRouter);
app.use("/api", trackingLogRouter);
app.use("/api", alertLogRouter);

app.listen(process.env.PORT, () => {
  console.log(
    `Server is being served on port http://localhost:${process.env.PORT}`,
  );
});
