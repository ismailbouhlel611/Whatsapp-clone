import React , {useState}from "react";
import "./Chat.css";
import { IconButton, Avatar } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import axios from './axios';

function Chat( {messages} ) {
  const [input,setInput]=useState('')
  const sendMessage= async (e) =>{
    e.preventDefault()

    axios.post('/messages/new',{
        name: "demo",
        message: input,
        timestamp : "taw",
        received: false
    })
    setInput('');
  }
  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar />
        <div className="chat-header-info">
          <h3>Room name</h3>
          <p>last seen at </p>
        </div>
        <div className="chat-header-icons">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat-body">
        {messages.map((message) => (
          <p className={`chat-message ${message.received && "chat-receiver"}`}>
            <span className=" chat_name">{message.name}</span>
            {message.message}
            <span className=" chat_timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>

      <div className="chat-footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <form>
          <input value={input} onChange={(e)=> setInput(e.target.value)} 
          placeholder="type a message" type="text" />
          <button onClick={sendMessage} type="submit">Send a message</button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
