import React from "react";
import messageImg from "../../assets/icon/icon-message-circle2.svg";
import shareIcon from "../../assets/icon/icon-share.svg";

function UserProfileBtn() {
    return (
        <div className="InfoBtn">
            <button className="profileCircleBtn chat">
                <img src={messageImg} alt="" className="messageImg" />
            </button>
            <button className="profileFollowBtn">팔로우</button>
            <button className="profileCircleBtn share">
                <img src={shareIcon} alt="" className="shareIcon" />
            </button>
        </div>
    );
}

export default UserProfileBtn;
