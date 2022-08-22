import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";
import { UserContext } from "../../context/UserContext";
import FollowerCard from "./FollowerCard";

function FollowerContainer() {
    const [followerList, setFollowerList] = useState([]);
    const { token } = useContext(UserContext);

    const location = useLocation();
    const accountName = location.state.accountName;

    const url = BASE_URL + `/profile/${accountName}/follower?limit=100`;
    const getFollowerList = () => {
        axios
            .get(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json",
                },
            })
            .then((response) => {
                setFollowerList(response.data);
            })
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        getFollowerList();
    }, []);
    return (
        <main className="followerMain">
            <section className="followContainer">
                <ul className="followList">
                    {followerList && followerList.length > 0
                        ? followerList.map((followerList, id) => {
                              return (
                                  <div key={id}>
                                      <FollowerCard
                                          followerList={followerList}
                                      />
                                  </div>
                              );
                          })
                        : null}
                </ul>
            </section>
        </main>
    );
}

export default FollowerContainer;
