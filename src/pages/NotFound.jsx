import { useHistory } from "react-router-dom";
import "./style/404loading.css";
import NotFoundImg from "../assets/icon/404.svg";

function NotFound() {
    const history = useHistory();
    const handleGoPrev = () => {
        history.goBack();
    };

    return (
        <div className="notFoundCont">
            <img src={NotFoundImg} alt="404에러" />
            {/* <a href="https://www.flaticon.com/kr/free-icons/" title="완두콩 아이콘">완두콩 아이콘  제작자: Freepik - Flaticon</a> */}
            <p>페이지를 찾을 수 없습니다. :(</p>
            <button onClick={handleGoPrev}>이전 페이지</button>
        </div>
    );
}

export default NotFound;
