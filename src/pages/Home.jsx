import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../components/constants/baseUrl";
import TapMenu from "../components/common/TapMenu";
import "../pages/style/Home.css";
import { useState } from "react";
import Search from "./Search";
// import PostList from "../components/post/PostList";
import PostItem from "../components/post/PostItem";

function Home() {
    const token = localStorage.getItem("token");
    // const [search, setSearch] = useState(false);

    // const goSearch = () => {
    //     setSearch(true);
    // };

    const [post, setPost] = useState([]);

    useEffect(() => {
        const getUserFeed = async () => {
            try {
                const response = await axios.get(BASE_URL + "/post/feed", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log(response);
                setPost(response.data.posts);
            } catch (err) {
                console.error(err);
            }
        };
        getUserFeed();
    }, []);

    return (
        <>
            {/* {search ? (
                <Search />
            ) : ( */}
            <>
                <header className="topMainNav">
                    <h1>연두마켓 피드</h1>
                    <button type="button" />
                </header>
                {/* <main className="homeContentNonFeed">
                    <div />
                    <p>유저를 검색해 팔로우 해보세요!</p>
                    <button type="button" className="searchBtn">
                        검색하기
                    </button>
                </main> */}
                <TapMenu />

                {post.map((post, id) => {
                    return (
                        <div key={id}>
                            <PostItem post={post} />
                        </div>
                    );
                })}
            </>
            {/* )} */}
        </>
    );
}
export default Home;
