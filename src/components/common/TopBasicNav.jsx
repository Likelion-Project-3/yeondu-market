import { useState } from "react";
import AlertModal from "./modal/AlertModal";
import Modal from "./modal/Modal";
import "./TopBasicNav.css";

export default function TopBasicNav() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <nav className="topBasicNav">
            <div className="prevBtn"></div>
            <div
                className="moreBtn"
                onClick={() => {
                    setIsModalOpen(!isModalOpen);
                }}
            >
                {isModalOpen === true ? (
                    // <Modal></Modal>
                    <div>
                        <Modal></Modal>
                        {/* <AlertModal></AlertModal> */}
                    </div>
                ) : null}
            </div>
        </nav>
    );
}
