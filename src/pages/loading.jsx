import loadingImg from "../assets/pea-color.svg";
import "./style/404loading.css";

function Loading() {
    return (
        <div className="loadingCont">
            <img src={loadingImg} alt="로딩 이미지" />
            <p>loading . . .</p>
        </div>
    );
}

export default Loading;
