import React from "react";
import FollowerCard from "./FollowerCard";

function FollowerContainer({ followerList }) {
    console.log(followerList);
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
