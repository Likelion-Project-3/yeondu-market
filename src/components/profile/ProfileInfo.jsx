import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../../pages/MyProfile";
import BasicProfileImg from "../common/BasicProfileImg";
import { BASE_URL } from "../constants/baseUrl";
import ProfileBtn from "./ProfileBtn";
import "./ProfileInfo.css";

function ProfileInfo() {
    const { profileInfo, followerCountData, token, accountname } =
        useContext(AppContext);
    const [followdata, setFollowData] = useState(profileInfo.profile.isfollow);
    const [followerCount, setFollowerCount] = useState("");
    const { accountName } = useParams();
    const profile = profileInfo.profile;

    //팔로우
    const handleSubmitFollow = async () => {
        try {
            const res = await axios(
                BASE_URL + `/profile/${accountName}/follow`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-type": "application/json",
                    },
                }
            );
            setFollowData(res.data.profile.isfollow);
            setFollowerCount(res.data.profile.followerCount);
        } catch (err) {
            console.log(err);
        }
    };

    //언팔로우
    const handleSubmitUnFollow = async () => {
        try {
            const res = await axios(
                BASE_URL + `/profile/${accountName}/unfollow`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-type": "application/json",
                    },
                }
            );
            setFollowData(res.data.profile.isfollow);
            setFollowerCount(res.data.profile.followerCount);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="infoWrap">
            {profile ? (
                <>
                    <div className="tempWrap">
                        <Link
                            to={{
                                pathname: `/${accountName}/follower`,
                                state: { accountName: accountName },
                            }}
                        >
                            <p className="followCount followers">
                                {accountName === accountname
                                    ? followerCountData
                                    : followerCount === ""
                                    ? followerCountData
                                    : followerCount}
                            </p>
                            <p className="followName followers">followers</p>
                        </Link>
                        <BasicProfileImg size="lg" src={profile.image} />
                        <Link
                            to={{
                                pathname: `/${accountName}/following`,
                                state: { accountName: accountName },
                            }}
                        >
                            <p className="followCount following">
                                {profile.followingCount}
                            </p>
                            <p className="followName following">followings</p>
                        </Link>
                    </div>
                    <div className="profileInfoWrap">
                        <p className="userName">{profile.username}</p>
                        <p className="userID">@ {profile.accountname}</p>
                        <p className="userIntro">{profile.intro}</p>
                    </div>
                </>
            ) : null}
            <FollowContext.Provider
                value={{
                    handleSubmitFollow,
                    handleSubmitUnFollow,
                    followerCount,
                    followdata,
                }}
            >
                <ProfileBtn />
            </FollowContext.Provider>
        </div>
    );
}

export default ProfileInfo;
export const FollowContext = createContext();
