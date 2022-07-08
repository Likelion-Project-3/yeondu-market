import React from "react";
import { useHistory } from "react-router-dom";

function FollowingHeader() {
    let history = useHistory();
    return (
        <header className="topMainNavFollow">
            <button
                className="prevBtn"
                onClick={() => {
                    history.goBack();
                }}
            ></button>
            <p>Following</p>
        </header>
    );
}

export default FollowingHeader;
