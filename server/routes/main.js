import userRoute from "./userRoute";
import authRoute from "./authRoute";
import regionRoute from "./regionRoute";
import cityProviceRoute from "./cityProviceRoute";
import agencyRoute from "./agencyRoute";
import serviceRoute from "./serviceRoute";
import timeRoute from "./timeRoute";
import bookingRoute from "./bookingRoute";

export const router = (app) => {
  app.use("/api/v1/user", userRoute);
  app.use("/api/v1", authRoute);
  app.use("/api/v1/region", regionRoute);
  app.use("/api/v1/cityprovice", cityProviceRoute);
  app.use("/api/v1/agency", agencyRoute);
  app.use("/api/v1/service", serviceRoute);
  app.use("/api/v1/time", timeRoute);
  app.use("/api/v1/booking", bookingRoute);
};
