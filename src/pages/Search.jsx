import "../pages/style/Search.css";
import TopMenuComponent from "../components/common/TopMenuComponent";
import TapMenu from "../components/common/TapMenu";
import { BASE_URL } from "../components/constants/baseUrl";
import axios from "axios";
import { useEffect, useState } from "react";
import UserList from "../components/search/UserList";

function Search() {
    const token = localStorage.getItem("token");

    const [searchUser, setSearchUser] = useState([]);
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        if (keyword) {
            const handleGetUserInfo = async () => {
                try {
                    const response = await axios.get(
                        BASE_URL + "/user/searchuser/?keyword=" + keyword,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );
                    console.log(response);
                    setSearchUser(response.data);
                    // setSearchUser();
                } catch (err) {
                    console.error(err);
                }
            };
            handleGetUserInfo();
        }
    }, [keyword]);
    console.log(searchUser.username);

    return (
        <>
            <TopMenuComponent
                topclassName="topSearchNav"
                rightclassName="unsettled"
                inputtype="text"
                onChange={(e) => {
                    setKeyword(e.target.value);
                }}
            />
            <main className="searchMain">
                {searchUser.map((user) => {
                    return (
                        <UserList
                            key={user._id}
                            image={user.image}
                            username={user.username}
                            accountname={`@ ${user.accountname}`}
                            alt={`${user.username}님의 프로필 사진`}
                        />
                    );
                })}
            </main>
            <TapMenu />
        </>
    );
}
export default Search;
