import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import MyProfileBtn from "./MyProfileBtn";
import UserProfileBtn from "./UserProfileBtn";
import { UserContext } from "../context/UserContext";

function ProfileBtn() {
    const { accountName } = useParams();
    const { accountname } = useContext(UserContext);
    return accountName === accountname ? <MyProfileBtn /> : <UserProfileBtn />;
}

export default ProfileBtn;
