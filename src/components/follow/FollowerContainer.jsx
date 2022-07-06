import React from "react";
import FollowerCard from "./FollowerCard";

function FollowerContainer() {
    return (
        <main className="followerMain">
            <section className="followContainer">
                <ul className="followList">
                    <FollowerCard />
                </ul>
            </section>
        </main>
    );
}

export default FollowerContainer;
