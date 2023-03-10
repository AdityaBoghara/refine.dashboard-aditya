import express from "express";
import dotenv from 'dotenv'
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import userRouter from "./routes/user.routes.js"
import propertyRouter from "./routes/property.routes.js"
dotenv.config()

const app = express();

app.use(cors()); /*CORS stands for Cross-Origin Resource Sharing. It is a
 security mechanism implemented in web browsers that allows a web page to 
 access resources from a different origin (i.e., a different domain, protocol, 
    or port) than the one that served the page.
    
    CORS allows web pages to bypass this restriction by sending additional HTTP 
    headers that inform the browser which origins are allowed to access the 
    resource, and what types of requests are allowed. These headers include 
    Access-Control-Allow-Origin, Access-Control-Allow-Methods, 
    Access-Control-Allow-Headers, and Access-Control-Allow-Credentials.
    
    */

app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send({ message: "hello world" });
});

app.use("/api/v1/users", userRouter)
app.use("/api/v1/properties", propertyRouter)

const startServer = async () => {
  try {
    //connect to database
    connectDB(process.env.MONGODB_URL);

    app.listen(8080, () =>
      console.log("Server started at port http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
