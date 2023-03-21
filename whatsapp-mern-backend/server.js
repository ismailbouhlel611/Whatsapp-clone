import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import cors from "cors";

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use(cors());

const pusher = new Pusher({
  appId: "*",
  key: "*",
  secret: "*",
  cluster: "*",
  useTLS: true
});

const db=mongoose.connection

db.once('open',()=>{
  console.log("db connected");

  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch()

  changeStream.on('change',(change)=>{
    console.log(change);
    if (change.operationType === 'insert'){
      const messageDetails = change.fullDocument;
      pusher.trigger('messages','inserted',{
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp : messageDetails.timestamp,
        received: messageDetails.received
      })
    } else {
        console.log("error triggering pusher")
    }

  })

})


const url =
  "*";
mongoose.connect(url);

app.get("/", (req, res) => res.status(200).send("hello world"));



app.get("/messages/sync", (req, res) => {

  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});




app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
app.listen(port, () => console.log(`listening on localhost: ${port}`));
