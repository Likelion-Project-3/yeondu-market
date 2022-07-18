import { useEffect, useState } from "react";
import TopBasicNav from "../components/common/TopBasicNav";
import ProductContainer from "../components/product/ProductContainer";
import ProfileInfo from "../components/profile/ProfileInfo";
import "../pages/style/MyProfile.css";
import { BASE_URL } from "../components/constants/baseUrl";
import axios from "axios";
import PostItem from "../components/post/PostItem";
import PostList from "../components/post/PostList";

function MyProfile() {
    const token = localStorage.getItem("token");
    const accountname = localStorage.getItem("accountname");
    const reqPath = `/profile/${accountname}`;

    const [profileInfo, setProfileInfo] = useState([]);
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        //내프로필 정보
        const getProfile = () => {
            axios
                .get(BASE_URL + reqPath, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-type": "application/json",
                    },
                })
                .then((response) => {
                    setProfileInfo(response.data);
                    console.log("Info :", profileInfo);
                })
                .catch((err) => console.log(err));
        };
        //내가 쓴 게시글 목록
        const postList = () => {
            axios
                .get(BASE_URL + `/post/${accountname}/userpost`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-type": "application/json",
                    },
                })
                .then((response) => {
                    setPostList(response.data);
                })
                .catch((err) => console.log(err));
        };
        getProfile();
        postList();
    }, []);
    return (
        <div className="profileWrap">
            <TopBasicNav />
            <ProfileInfo profileInfo={profileInfo} />
            <ProductContainer />
            <PostList postList={postList} />
        </div>
    );
}
export default MyProfile;
