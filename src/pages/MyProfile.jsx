import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../components/constants/baseUrl";
import Loading from "./loading";
import PostAlbum from "../components/post/PostAlbum";
import PostContainer from "../components/post/PostContainer";
import PostList from "../components/post/PostList";
import ProductContainer from "../components/product/ProductContainer";
import ProfileInfo from "../components/profile/ProfileInfo";
import TapMenu from "../components/common/TapMenu";
import TopBasicNav from "../components/common/TopBasicNav";
import "../pages/style/MyProfile.css";

function MyProfile() {
    const token = localStorage.getItem("token");
    const accountname = localStorage.getItem("accountname");

    const [profileInfo, setProfileInfo] = useState("");
    const [myprofileInfo, setMyProfileInfo] = useState("");
    const [postList, setPostList] = useState([]);
    const [productList, setProductList] = useState([]);

    const [listClick, setListClick] = useState(true);
    const [albumClick, setAlbumClick] = useState(false);

    const { accountName } = useParams();

    const onClickList = () => {
        setListClick(true);
        setAlbumClick(false);
    };

    const onClickAlbum = () => {
        setAlbumClick(true);
        setListClick(false);
    };
    useEffect(() => {
        //내프로필 정보
        const getMyProfile = () => {
            axios
                .get(BASE_URL + "/user/myinfo", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-type": "application/json",
                    },
                })
                .then((response) => {
                    setMyProfileInfo(response.data);
                })
                .catch((err) => console.log(err));
        };
        //유저 프로필 정보
        const getProfile = () => {
            axios
                .get(BASE_URL + `/profile/${accountName}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-type": "application/json",
                    },
                })
                .then((response) => {
                    setProfileInfo(response.data);
                })
                .catch((err) => console.log(err));
        };
        //게시글 목록
        const postList = () => {
            axios
                .get(BASE_URL + `/post/${accountName}/userpost`, {
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

        //등록한 상품 목록
        const productList = () => {
            axios
                .get(BASE_URL + `/product/${accountName}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-type": "application/json",
                    },
                })
                .then((response) => {
                    setProductList(response.data);
                })
                .catch((err) => console.log(err));
        };
        getMyProfile();
        getProfile();
        postList();
        productList();
    }, []);
    // console.log(profileInfo);
    // console.log("my", myprofileInfo);
    if (token === null) {
        window.location = "/";
        // console.log(profileInfo);
    } else if (!profileInfo) {
        // return <div>loading...</div>;
        return <Loading />;
    } else {
        return (
            <div className="profileWrap">
                <TopBasicNav />
                <ProfileInfo profileInfo={profileInfo} />
                <ProductContainer productList={productList} />
                <PostContainer
                    postList={postList}
                    listClick={listClick}
                    albumClick={albumClick}
                    onClickList={onClickList}
                    onClickAlbum={onClickAlbum}
                />
                {listClick === true && albumClick === false ? (
                    <PostList postList={postList} />
                ) : (
                    <PostAlbum postList={postList} />
                )}
                <TapMenu />
            </div>
        );
    }
}
export default MyProfile;
