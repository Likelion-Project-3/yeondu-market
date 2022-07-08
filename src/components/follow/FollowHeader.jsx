import React from "react";
import { useHistory } from "react-router-dom";

function FollowHeader() {
    let history = useHistory();
    return (
        <header className="topMainNavFollow">
            <button
                className="prevBtn"
                onClick={() => {
                    history.goBack();
                }}
            ></button>
            <p>Followers</p>
        </header>
    );
}

export default FollowHeader;
