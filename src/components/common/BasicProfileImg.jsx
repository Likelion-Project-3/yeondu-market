import "./BasicProfileImg.css";
import BasicProfile from "../../assets/basic-profile-img.svg";

export default function BasicProfileImg(props) {
    return (
        <img
            src={BasicProfile}
            alt=""
            className={`basicProfileImg ${props.size}`}
        />
    );
}
