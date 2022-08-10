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
import { createContext } from "react";

export const AppContext = createContext();

function MyProfile() {
    const token = localStorage.getItem("token");

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
    console.log("22", profileInfo);
    console.log("profileInfo", profileInfo.profile);
    // console.log(profileInfo.profile.isfollow);

    //팔로우
    // const handleSubmitFollow = async () => {
    //     try {
    //         const res = await axios(
    //             BASE_URL + `/profile/${accountName}/follow`,
    //             {
    //                 method: "POST",
    //                 headers: {
    //                     Authorization: `Bearer ${token}`,
    //                     "Content-type": "application/json",
    //                 },
    //             }
    //         );
    //         console.log("팔로우", res);
    //         console.log("isfollow", res.data.profile.isfollow);
    //         // setFollowData(res.data.profile.isfollow);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    //언팔로우
    // const handleSubmitUnFollow = async () => {
    //     try {
    //         const res = await axios(
    //             BASE_URL + `/profile/${accountName}/unfollow`,
    //             {
    //                 method: "DELETE",
    //                 headers: {
    //                     Authorization: `Bearer ${token}`,
    //                     "Content-type": "application/json",
    //                 },
    //             }
    //         );
    //         console.log("언팔로우", res);
    //         console.log("isfollow", res.data.profile.isfollow);
    //         // setFollowData(res.data.profile.isfollow);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

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
                    // profileInfo.handleSubmit(); // 댓글 작성 후 댓글 리스트 새로고침
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

        // console.log(profileInfo.profile.isfollow);
        getMyProfile();
        getProfile();
        postList();
        productList();
    }, [accountName, token]);
    console.log("11", profileInfo);
    console.log("12", profileInfo.profile);
    // console.log("13", profileInfo.profile.isfollow);
    // const [followdata, setFollowData] = useState(profileInfo.profile.isfollow);
    if (token === null) {
        window.location = "/";
    } else if (!profileInfo) {
        // return <div>loading...</div>;
        return <Loading />;
    } else {
        return (
            <div className="profileWrap">
                <TopBasicNav />
                <AppContext.Provider
                    value={{
                        profileInfo,
                        // handleSubmitFollow,
                        // handleSubmitUnFollow,
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
