import React from 'react';
import "./Sidebar.css";
import SidebarChat from './SidebarChats';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton , Avatar} from '@mui/material';
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar-header'>
            <div className='sidebar-header-left'>
                <Avatar src='https://imgs.search.brave.com/SMex-KS1YSneae-vz_wR0B2Fa54f58H7-hvl54JOCp0/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Ev/QUFUWEFKd2plc0k4/U0Q0RkJubk5ta0Z5/c2hwemJnb0FnSXlz/cTN6TGdBPXM5MDAt/Yy1rLWMweGZmZmZm/ZmZmLW5vLXJqLW1v'/>
            </div>
            <div className='sidebar-header-right'>
                <IconButton>
                    <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>   
            </div>
        </div>
        <div className='sidebar-search'>
            <div className='sidebar-searchcontainer'>
                <SearchIcon/>
                <input placeholder='Search or start new chat' type='text'/>
            </div>
        </div>
        <div className='sidebar-chats'>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
        </div>
    </div>
  )
}

export default Sidebar