import mongoose from "mongoose";

export const connection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "JOB_PORTAL_WITH_AUTOMATION",
    })
    .then(() => {
      console.log("database connected");
    })
    .catch((err) => {
      console.log(`some error occured while connection to database : ${err}`);
    });
};
