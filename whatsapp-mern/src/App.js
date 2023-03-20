import './App.css';
import React, { useEffect, useState } from "react"
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js'
import axios from './axios';  

function App() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get('/messages/sync').then(response =>{
        setMessages(response.data) 
      })
  }, [])
  


  useEffect(() => {
    const pusher = new Pusher('5675a9aa7171db357cf5', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      setMessages([...messages,newMessage])
    });
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])


  console.log(messages)


  return (
    <div className="app">
      <div className='app-body'>
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
