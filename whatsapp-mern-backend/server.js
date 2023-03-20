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
  appId: "1560056",
  key: "5675a9aa7171db357cf5",
  secret: "ec23cecff2834d3bd661",
  cluster: "eu",
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
  "mongodb+srv://admin:Y1yGxy86jdDwUcSy@cluster0.nd5tggn.mongodb.net/?retryWrites=true&w=majority";
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
