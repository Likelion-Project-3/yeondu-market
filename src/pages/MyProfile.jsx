import { useEffect, useState } from "react";
import TopBasicNav from "../components/common/TopBasicNav";
import ProductContainer from "../components/product/ProductContainer";
import ProfileInfo from "../components/profile/ProfileInfo";
import "../pages/style/MyProfile.css";
import { BASE_URL } from "../components/constants/baseUrl";
import axios from "axios";
import PostList from "../components/post/PostList";
import postListOn from "../assets/icon/icon-post-list-on.png";
import postListOff from "../assets/icon/icon-post-list-off.png";
import postAlbumOn from "../assets/icon/icon-post-album-on.png";
import postAlbumOff from "../assets/icon/icon-post-album-off.png";
import PostAlbum from "../components/post/PostAlbum";
import TapMenu from "../components/common/TapMenu";
import { useParams } from "react-router-dom";

function MyProfile() {
    const token = localStorage.getItem("token");
    const accountname = localStorage.getItem("accountname");

    const [profileInfo, setProfileInfo] = useState("");
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
        //내가 쓴 게시글 목록
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

        //내가 등록한 상품 목록
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
        getProfile();
        postList();
        productList();
    }, []);
    console.log(profileInfo);
    if (token === null) {
        window.location = "/";
        // console.log(profileInfo);
    } else if (!profileInfo) {
        return <div>loading...</div>;
    } else {
        return (
            <div className="profileWrap">
                <TopBasicNav />
                <ProfileInfo profileInfo={profileInfo} />
                <ProductContainer productList={productList} />
                <div className="postBtnWap">
                    <div className="btnContainer">
                        <button
                            className="profilePostBtn list"
                            onClick={onClickList}
                        >
                            {listClick === false ? (
                                <img src={postListOff} alt=""></img>
                            ) : (
                                <img src={postListOn} alt=""></img>
                            )}
                        </button>
                        <button
                            className="profilePostBtn album"
                            onClick={onClickAlbum}
                        >
                            {albumClick === false ? (
                                <img src={postAlbumOff} alt=""></img>
                            ) : (
                                <img src={postAlbumOn} alt=""></img>
                            )}
                        </button>
                    </div>
                </div>
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
