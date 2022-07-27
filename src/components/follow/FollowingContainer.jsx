import React from "react";
import FollowingCard from "./FollowingCard";

function FollowingContainer({ followingList }) {
    console.log(followingList);
    return (
        <main className="followerMain">
            <section className="followContainer">
                <ul className="followList">
                    {followingList && followingList.length > 0
                        ? followingList.map((followingList, id) => {
                              return (
                                  <div key={id}>
                                      <FollowingCard
                                          followingList={followingList}
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

export default FollowingContainer;
