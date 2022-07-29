import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function FollowingCard({ followingList }) {
    const [isfollow, setIsFollow] = useState(false);

    const handleFollowBtn = () => {
        setIsFollow(!isfollow);
    };
    console.log("card", followingList);
    // if(followingList.username === )
    const userUrl = `/profile/${followingList.accountname}`;

    return (
        <li className="followItem">
            <Link to={userUrl} className="followLink">
                <div className="followerImg">
                    <img
                        src={followingList.image}
                        alt=""
                        // className="followerImg"
                    />
                </div>
                <div className="followInfo">
                    <p className="followerName">{followingList.username}</p>
                    <p className="followerIntro">{followingList.intro}</p>
                </div>
            </Link>
            {/* 팔로우를 하고 있을 땐 취소, 하지 않을땐 팔로우,, */}
            {isfollow === true ? (
                <button className="cancelBtn" onClick={handleFollowBtn}>
                    취소
                </button>
            ) : (
                <button className="followBtn" onClick={handleFollowBtn}>
                    팔로우
                </button>
            )}
        </li>
    );
}

export default FollowingCard;
