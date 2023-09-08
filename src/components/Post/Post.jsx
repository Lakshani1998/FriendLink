import React from 'react'
import './post.css'
import { MoreVert } from '@mui/icons-material'
import {Users} from "../../dummyData"

export default function Post({post}) {
    const user = Users.filter(u=>u.id---1)

    console.log(post);
    console.log(user);
  return (
   <div className="post">
    <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className='postProfileImg' src="/assets/person/14.jpg" alt="" />
                <span className="postUserName">Safran Kaush</span>
                <span className="postTime">{post.date}</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
        </div>


        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img src={post.photo} alt="" className="postImg" />
        </div>


        <div className="postBottom">
            <div className="postBottomLeft">
                <img className='likeIcon' src="assets/like.png" alt="" />
                <img className='heartIcon' src="assets/heart.png" alt="" />
                <span className="postlikeCounter">{post.like}</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comment}</span>
            </div>
        </div>
    </div>
   </div>
  )
}
