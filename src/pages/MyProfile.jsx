import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../components/constants/baseUrl";
import { UserContext } from "../context/UserContext";
import PageLoading from "./PageLoading";
import PostAlbum from "../components/post/PostAlbum";
import PostContainer from "../components/post/PostContainer";
import PostList from "../components/post/PostList";
import ProductContainer from "../components/product/ProductContainer";
import ProfileInfo from "../components/profile/ProfileInfo";
import TapMenu from "../components/common/TapMenu";
import TopBasicNav from "../components/common/TopBasicNav";
import "../pages/style/MyProfile.css";

function MyProfile() {
    const [listClick, setListClick] = useState(true);
    const [albumClick, setAlbumClick] = useState(false);
    const [profileInfo, setProfileInfo] = useState("");
    const [myprofileInfo, setMyProfileInfo] = useState("");
    const [postList, setPostList] = useState([]);
    const [productList, setProductList] = useState([]);
    const [followerCountData, setFollowerCountData] = useState("");

    const { accountName } = useParams();
    const { token, accountname } = useContext(UserContext);

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
        const getProfile = (e) => {
            // e.preventDefault();
            axios
                .get(BASE_URL + `/profile/${accountName}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-type": "application/json",
                    },
                })
                .then((response) => {
                    setProfileInfo(response.data);
                    setFollowerCountData(response.data.profile.followerCount);
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
    }, [accountName, token]);

    if (token === null) {
        window.location = "/";
    } else if (!profileInfo) {
        return <PageLoading />;
    } else {
        return (
            <div className="profileWrap">
                <TopBasicNav />
                <AppContext.Provider
                    value={{
                        profileInfo,
                        followerCountData,
                    }}
                >
                    <ProfileInfo />
                </AppContext.Provider>

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
export const AppContext = createContext();
