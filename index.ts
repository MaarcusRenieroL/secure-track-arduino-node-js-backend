import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import passengerLogRouter from "./routes/passenger-log.route";

export const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.use('/api', passengerLogRouter); 


app.listen(process.env.PORT, () => {
  console.log(
    `Server is being served on port http://localhost:${process.env.PORT}`,
  );
});
