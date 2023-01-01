import userRoute from "./v1/user.route.js";
import authRoute from "./v1/auth.route.js";
import regionRoute from "./v1/region.route.js";
import cityProviceRoute from "./v1/cityProvice.route.js";
import agencyRoute from "./v1/agency.route.js";
import serviceRoute from "./v1/service.route.js";
import timeRoute from "./v1/time.route.js";
import bookingRoute from "./v1/booking.route.js";

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
