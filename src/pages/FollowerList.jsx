import "../pages/style/FollowerList.css";
import React from "react";
import FollowHeader from "../components/follow/FollowHeader";
import FollowerContainer from "../components/follow/FollowerContainer";

function FollowerList() {
    return (
        <div className="followerWrap">
            <FollowHeader />
            <FollowerContainer />
        </div>
    );
}

export default FollowerList;
