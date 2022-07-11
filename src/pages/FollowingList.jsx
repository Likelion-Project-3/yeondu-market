import React from "react";
import FollowingContainer from "../../components/follow/FollowingContainer";
import FollowingHeader from "../../components/follow/FollowingHeader";
import "../pages/style/FollowerList.css";
function FollowingList() {
    return (
        <div className="followerWrap">
            <FollowingHeader />
            <FollowingContainer />
        </div>
    );
}

export default FollowingList;
