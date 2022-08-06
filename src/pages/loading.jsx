import loadingImg from "../assets/pea-color.svg";
import "./style/404loading.css";

function Loading() {
    return (
        <div className="loadingCont">
            <img src={loadingImg} alt="로딩 이미지" />
            {/* <a href="https://www.flaticon.com/kr/free-icons/" title=" 아이콘"> 아이콘  제작자: Freepik - Flaticon</a> */}
            <p>loading . . .</p>
        </div>
    );
}

export default Loading;
