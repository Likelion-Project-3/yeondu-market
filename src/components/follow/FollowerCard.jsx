import React, { useState } from "react";
import { Link } from "react-router-dom";

function FollowerCard({ followerList }) {
    const [isfollow, setIsFollow] = useState(false);

    const handleFollowBtn = () => {
        setIsFollow(!isfollow);
    };
    const userUrl = `/profile/${followerList.accountname}`;
    return (
        <li className="followItem">
            <Link to={userUrl} className="followLink">
                <div className="followerImg">
                    <img src={followerList.image} alt="" />
                </div>
                <div className="followInfo">
                    <p className="followerName">{followerList.username}</p>
                    <p className="followerIntro">{followerList.intro}</p>
                </div>
            </Link>
            {followerList.isfollow === true ? (
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

export default FollowerCard;
