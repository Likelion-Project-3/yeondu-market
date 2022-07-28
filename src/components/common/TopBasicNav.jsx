import ProfileModal from "../modal/ProfileModal";
import "./TopBasicNav.css";
import TopMenuComponent from "./TopMenuComponent";
import React, { useState } from "react";

function TopBasicNav() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const ModalOpen = () => {
        setIsOpenModal(!isOpenModal);
    };

    return (
        <>
            <TopMenuComponent
                topclassName="topBasicNav"
                inputtype="notext"
                rightclassName="moreBtn"
                type="button"
                handlerRightBtn={ModalOpen}
            />
            {isOpenModal && (
                <ProfileModal
                    setIsOpenModal={setIsOpenModal}
                    isOpenModal={isOpenModal}
                />
            )}
        </>
    );
}
export default TopBasicNav;
