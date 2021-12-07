import mongoose from "mongoose";

const options = {
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
  keepAlive: true,
  keepAliveInitialDelay: 300000,
  connectTimeoutMS: 1000,
};

function connectDB(req, res, next) {
  mongoose.connect(process.env.URI, options).then(
    () => {
      /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
      console.log("connect success");
      next();
    },
    (err) => {
      console.warn("initial connection error !! ");
      throw new Error("initial connection error !!");
      console.warn(err);
      /** handle initial connection error */
    },
  );
}
export default connectDB;
