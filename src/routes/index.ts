import { API_VERSION } from "../constants/AppConstant";
import userRoutes from "./user/User.Route";


const routes = (app:any) => {
  
    // user routes
    app.use(`/${API_VERSION}/users`, userRoutes);
    // app.use(`/${API_VERSION}/users/select-cars`, selectCarRoutes);
    // app.use(`/${API_VERSION}/users/bookings`, bookingRoutes);
  
    // driver routes
    // app.use(`/${API_VERSION}/drivers`, driverRoutes);
    // app.use(`/${API_VERSION}/drivers/bookings`, driverBookingRoutes);
  
    // // common routes
    // app.use(`/${API_VERSION}`, commonRoutes);
  
    // // list routes
    // app.use(`/${API_VERSION}`, dropDownListRoutes);
  
    // //troubleshoot Routes
    // app.use(`/${API_VERSION}`, troubleshootRoutes);
  };

export default routes;