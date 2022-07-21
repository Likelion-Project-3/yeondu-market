import ProfileModal from "../modal/ProfileModal";
import "./TopBasicNav.css";
import TopMenuComponent from "./TopMenuComponent";
import React,{useState} from "react";

function TopBasicNav() {
    const[isOpenModal, setIsOpenModal] = useState(false);
    const handleOpenModal = () => {
        setIsOpenModal(true);
    }
    const handleCloseModal =() =>{
        setIsOpenModal(false);
    }
    return (<>
        <TopMenuComponent topclassName="topBasicNav" inputtype="notext" className="moreBtn" type="button" handlerRightBtn={handleOpenModal}/>
        {isOpenModal && (<ProfileModal onCilck={handleCloseModal}/>)}
        </>
    );
}
export default TopBasicNav;
