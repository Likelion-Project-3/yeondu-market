import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../components/constants/baseUrl";
import PostItem from "../components/post/PostItem";
import TapMenu from "../components/common/TapMenu";
import { UserContext } from "../context/UserContext";
import "../pages/style/Home.css";

function Home() {
    const { token } = useContext(UserContext);
    const [post, setPost] = useState([]);

    const goSearch = () => {
        window.location.href = "/search";
    };

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
            <header className="topMainNav">
                <h1>연두마켓 피드</h1>
                <button type="button" onClick={goSearch} >
                    <span className="ir">계정 검색하기 버튼</span>
                </button>
            </header>
            {post.length !== 0 ? (
                <main className="homeContentFeed">
                    {post.map((post, id) => {
                        return (
                            <div key={id}>
                                <PostItem post={post} />
                            </div>
                        );
                    })}
                </main>
            ) : (
                <main className="homeContentNonFeed">
                    <div />
                    <p>유저를 검색해 팔로우 해보세요!</p>
                    {/* <a href="https://www.flaticon.com/kr/free-icons/" title=" 아이콘"> 아이콘  제작자: Freepik - Flaticon</a> */}
                    <button
                        type="button"
                        className="searchBtn"
                        onClick={goSearch}
                    >
                        검색하기
                    </button>
                </main>
            )}
            <TapMenu />
        </>
    );
}
export default Home;
