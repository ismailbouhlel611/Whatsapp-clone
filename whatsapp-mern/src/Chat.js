import React from 'react'
import './Chat.css'
import { IconButton , Avatar} from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

function Chat() {
  return (
    <div className='chat'>
        <div className='chat-header'>
            <Avatar/>
            <div className='chat-header-info'>
              <h3>Room name</h3>
              <p>last seen at </p>
            </div>
            <div className='chat-header-icons'>
              <IconButton>
                <SearchIcon/>
              </IconButton>
              <IconButton>
                <AttachFileIcon/>
              </IconButton>
              <IconButton>
                <MoreVertIcon/>
              </IconButton>
            </div>
        </div>
        <div className='chat-body'>
          <p className='chat-message'>
            <span className=" chat_name">Blue</span>
            This is a message
            <span className=" chat_timestamp">{new Date().toUTCString()}</span>
          </p>
          <p className='chat-message chat-receiver'>
            <span className=" chat_name">Blue</span>
            This is a message
            <span className=" chat_timestamp">{new Date().toUTCString()}</span>
          </p>
          <p className='chat-message chat-receiver'>
            <span className=" chat_name">Blue</span>
            This is a message
            <span className=" chat_timestamp">{new Date().toUTCString()}</span>
          </p>
        </div>
        <div className='chat-footer'>
          <IconButton>
            <InsertEmoticonIcon/>
          </IconButton>
          <form>
            <input placeholder='type a message' type='text'/>
            <button  type='submit'>
              Send a message
            </button>
          </form>
          <IconButton>
            <MicIcon/>
          </IconButton>
        </div>
    </div>
  )
}

export default Chat