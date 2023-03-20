import { Avatar } from '@mui/material'
import React from 'react'
import './SidebarChats.css'
function SidebarChat() {
  return (
    <div className='sidebarchat'>
        <Avatar/>
        <div className='sidebarchat-info'>
            <h2>Room name</h2>
            <p>hehehehhe</p>
        </div>
    </div>
  )
}

export default SidebarChat