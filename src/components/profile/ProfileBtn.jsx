import React, { useState } from "react";
import MyProfileBtn from "./MyProfileBtn";
import UserProfileBtn from "./UserProfileBtn";
function ProfileBtn() {
    const [myPage, setMyPage] = useState(true);
    return myPage ? <MyProfileBtn /> : <UserProfileBtn />;
}

export default ProfileBtn;
