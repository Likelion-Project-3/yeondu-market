import "./TopChatNav.css";
import TopMenuComponent from "../common/TopMenuComponent";
import React,{useState} from "react";
import LeaveChatModal from "./LeaveChatModal";

function TopChatNav() {
    const[isOpenModal, setIsOpenModal] = useState(false);
    const handleOpenModal = () =>{
        setIsOpenModal(!isOpenModal);
    }
    const handleCloseModal =() =>{
        setIsOpenModal(false);
    }
    return (<>
        <TopMenuComponent topclassName="topChatNav" h2className="chatSender" 
        h2title="애월읍 위니브 감귤농장" inputtype="notext" rightclassName="moreBtn" type="button" handlerRightBtn={handleOpenModal}/>
        {isOpenModal && (<LeaveChatModal onClick={handleCloseModal}/>)}
        </>
    );
}
export default TopChatNav;