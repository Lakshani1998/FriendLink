import React from 'react'
import "./sidebar.css"
import {RssFeed,Chat,PlayCircle,Groups,Bookmarks,Help,Work,InsertInvitation, School} from '@mui/icons-material'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed  className = "sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
          </li>

          <li className="sidebarListItem">
            <Chat className = "sidebarIcon"/>
            <span className="sidebarListItemText">Chats</span>
          </li>

          <li className="sidebarListItem">
            <PlayCircle classname = 'sidebarIcon'/>
            <span className="sidebarListItemText">Videos</span>
          </li>

          <li className="sidebarListItem">
            <Groups classname = 'sidebarIcon'/>
            <span className="sidebarListItemText">Groups</span>
          </li>

          <li className="sidebarListItem">
            <Bookmarks classname = 'sidebarIcon'/>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>

          <li className="sidebarListItem">
            <Help className = "sidebarIcon"/>
            <span className="sidebarListItemText">Questions</span>
          </li>

          <li className="sidebarListItem">
            <Work className = "sidebarIcon"/>
            <span className="sidebarListItemText">Jobs</span>
          </li>

          <li className="sidebarListItem">
            <InsertInvitation className = "sidebarIcon"/>
            <span className="sidebarListItemText">Events</span>
          </li>

          <li className="sidebarListItem">
            <School className = "sidebarIcon"/>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>

        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src="/assets/person/7.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Vidhuu Manikala</span>
          </li>

          <li className="sidebarFriend">
            <img src="/assets/person/8.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Warsha Nuwanthi</span>
          </li>

          <li className="sidebarFriend">
            <img src="/assets/person/3.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Malshan Malaka</span>
          </li>

          <li className="sidebarFriend">
            <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Lahiru Wimukthi</span>
          </li>

          <li className="sidebarFriend">
            <img src="/assets/person/8.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Prasanna Malgothra</span>
          </li>

          <li className="sidebarFriend">
            <img src="/assets/person/9.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Sarasvi Wickram</span>
          </li>

          <li className="sidebarFriend">
            <img src="/assets/person/10.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Pathri Ediriweera</span>
          </li>

          <li className="sidebarFriend">
            <img src="/assets/person/11.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Shrik X</span>
          </li>

          <li className="sidebarFriend">
            <img src="/assets/person/12.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Shaa Man</span>
          </li>

          <li className="sidebarFriend">
            <img src="/assets/person/13.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Dino X</span>
          </li>

          <li className="sidebarFriend">
            <img src="/assets/person/14.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Chamith Mano</span>
          </li>

          <li className="sidebarFriend">
            <img src="/assets/person/15.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Sri Nadan</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
