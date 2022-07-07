import TopBasicNav from "../../components/TopBasicNav";
import basicProfile from "../../assets/basic-profile-img.svg";
import messageImg from "../../assets/icon/icon-message-circle2.svg";
import shareIcon from "../../assets/icon/icon-share.svg";

import "./MyProfile.css";
export default function MyProfile() {
    return (
        <div className="profileWrap">
            <TopBasicNav />
            <div className="temp-wrap">
                <a href="/followerlist">
                    <p className="followCount followers">2950</p>
                    <p className="followName followers">followers</p>
                </a>
                <img className="userImage" src={basicProfile} alt="" />
                <a href="/followinglist">
                    <p className="followCount following">128</p>
                    <p className="followName following">followings</p>
                </a>
            </div>

            <p className="userName">애월읍 위니브 감귤공장</p>
            <p className="userID">@ weniv_Mandarin</p>
            <p className="userIntro">
                애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장
            </p>
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
