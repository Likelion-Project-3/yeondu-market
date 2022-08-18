import React, { useContext } from "react";
import { FollowContext } from "./ProfileInfo";
import messageImg from "../../assets/icon/icon-message-circle2.svg";
import shareIcon from "../../assets/icon/icon-share.svg";
import "./UserProfileBtn.css";

function UserProfileBtn() {
    const { handleSubmitFollow, handleSubmitUnFollow, followdata } =
        useContext(FollowContext);

    const handleFollowBtn = () => {
        console.log("22followdata", followdata);
        if (followdata === true) {
            handleSubmitUnFollow();
        } else {
            handleSubmitFollow();
        }
    };

    return (
        <div className="InfoBtn">
            <button className="profileCircleBtn chat">
                <img src={messageImg} alt="" className="messageImg" />
            </button>
            {followdata === true ? (
                <button
                    className="profileUnFollowBtn"
                    onClick={handleFollowBtn}
                >
                    언팔로우
                </button>
            ) : (
                <button className="profileFollowBtn" onClick={handleFollowBtn}>
                    팔로우
                </button>
            )}

            <button className="profileCircleBtn share">
                <img src={shareIcon} alt="" className="shareIcon" />
            </button>
        </div>
    );
}

export default UserProfileBtn;
