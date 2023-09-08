import React from 'react'
import './post.css'
import { MoreVert } from '@mui/icons-material'

export default function Post() {
  return (
   <div className="post">
    <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className='postProfileImg' src="/assets/person/14.jpg" alt="" />
                <span className="postUserName">Safran Kaush</span>
                <span className="postTime">5 minutes ago</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
        </div>


        <div className="postCenter">
            <span className="postText">Hey! Its my 1st post</span>
            <img src="./assets/post/1.png" alt="" className="postImg" />
        </div>


        <div className="postBottom">
            <div className="postBottomLeft">
                <img className='likeIcon' src="assets/like.png" alt="" />
                <img className='heartIcon' src="assets/heart.png" alt="" />
                <span className="postlikeCounter">3K Likes</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">9 Comments</span>
            </div>
        </div>
    </div>
   </div>
  )
}
