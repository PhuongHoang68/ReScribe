const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();


const app = express();
// app.use(cors({
//     origin: 'http://localhost:3000', // allow requests from your React app
//     credentials: true,               // if you're using cookies/auth
//   }));
// app.use(cors());
// app.use(express.json());
app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (origin === 'http://localhost:3000') {
      res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  
    if (req.method === 'OPTIONS') {
      return res.status(204).end();
    }
    next();
  });


app.use(express.json());
const generateRoute = require("./routes/generate");
const historyRoutes = require("./routes/history")

app.use("/api/generate", generateRoute);
app.use("/api/history", historyRoutes);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  } catch (err) {
    console.error(err);
  }
};

startServer();
