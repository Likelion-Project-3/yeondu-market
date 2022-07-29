import "./TopChatNav.css";
import TopMenuComponent from "../common/TopMenuComponent";
import React, { useState } from "react";
import LeaveChatModal from "./LeaveChatModal";

function TopChatNav() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const handleModalOn = () => {
        setIsOpenModal(!isOpenModal);
    };
    return (
        <>
            <TopMenuComponent
                topclassName="topChatNav"
                h2className="chatSender"
                h2title="냠냐미"
                inputtype="notext"
                rightclassName="moreBtn"
                type="button"
                handlerRightBtn={handleModalOn}
            />
            {isOpenModal && (
                <LeaveChatModal
                    setIsOpenModal={setIsOpenModal}
                    isOpenModal={isOpenModal}
                />
            )}
        </>
    );
}
export default TopChatNav;
