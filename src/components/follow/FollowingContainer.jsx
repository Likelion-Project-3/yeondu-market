import React from "react";
import FollowingCard from "./FollowingCard";

function FollowingContainer() {
    return (
        <main className="followerMain">
            <section className="followContainer">
                <ul className="followList">
                    <FollowingCard />
                </ul>
            </section>
        </main>
    );
}

export default FollowingContainer;
